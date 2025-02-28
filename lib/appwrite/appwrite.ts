import { Client, Account, Databases, ID } from 'appwrite';

const client = new Client();
client.setEndpoint('https://cloud.appwrite.io/v1') // Replace with your Appwrite endpoint
    .setProject('YOUR_PROJECT_ID'); // Replace with your project ID

const account = new Account(client);
const databases = new Databases(client);

// User Signup with Email OTP
export const signUpWithEmail = async (email: string, password: string, name: string, dob: string, country: string, city: string) => {
    try {
        const user = await account.create(ID.unique(), email, password, name);
        await databases.createDocument(
            'YOUR_DATABASE_ID',
            'users',
            ID.unique(),
            { full_name: name, date_of_birth: dob, country, city, email, is_subscribed: false }
        );
        return user;
    } catch (error) {
        console.error('Signup error:', error);
        throw error;
    }
};

// User Signup with Phone OTP

// Sign In with Email or Phone

// Subscribe to Jobs (3-month subscription)
export const subscribeUser = async (userId: string) => {
    try {
        const expiryDate = new Date();
        expiryDate.setMonth(expiryDate.getMonth() + 3);
        return await databases.updateDocument('YOUR_DATABASE_ID', 'users', userId, { is_subscribed: true, subscription_expiry: expiryDate.toISOString() });
    } catch (error) {
        console.error('Subscription error:', error);
        throw error;
    }
};

// Fetch Jobs with Filter
export const fetchJobs = async (country?: string) => {
    try {
        return await databases.listDocuments('YOUR_DATABASE_ID', 'jobs', [
            country ? `location=${country}` : ''
        ]);
    } catch (error) {
        console.error('Fetch jobs error:', error);
        throw error;
    }
};

// Admin: Post Job
export const postJob = async (title: string, description: string, location: string, salary: string, category: string, adminId: string) => {
    try {
        return await databases.createDocument('YOUR_DATABASE_ID', 'jobs', ID.unique(), {
            title,
            description,
            location,
            salary,
            category,
            posted_by: adminId,
            posted_at: new Date().toISOString()
        });
    } catch (error) {
        console.error('Post job error:', error);
        throw error;
    }
};

// Admin: Cancel Subscription
export const cancelSubscription = async (userId: string) => {
    try {
        return await databases.updateDocument('YOUR_DATABASE_ID', 'users', userId, { is_subscribed: false, subscription_expiry: null });
    } catch (error) {
        console.error('Cancel subscription error:', error);
        throw error;
    }
};

// Save and Like Jobs
export const saveJob = async (userId: string, jobId: string) => {
    return await databases.createDocument('YOUR_DATABASE_ID', 'saved_jobs', ID.unique(), { user_id: userId, job_id: jobId });
};

export const likeJob = async (userId: string, jobId: string) => {
    return await databases.createDocument('YOUR_DATABASE_ID', 'liked_jobs', ID.unique(), { user_id: userId, job_id: jobId });
};

// Admin: View All Users
export const getAllUsers = async () => {
    return await databases.listDocuments('YOUR_DATABASE_ID', 'users');
};
