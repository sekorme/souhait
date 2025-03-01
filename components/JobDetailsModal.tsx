'use client';

import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface Job {
    id: string;
    title: string;
    location: { display_name: string };
    description: string;
    salary_min?: number;
    salary_max?: number;
    salary_currency?: string;
    contact_details?: string; // Added contact details
    apply_link?: string; // Added apply link
}

interface Props {
    job: Job | "";
    onClose: () => void;
}

const JobDetailsModal: React.FC<Props> = ({ job, onClose }) => {
    if (!job) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className=" rounded-lg bg-neutral-800 p-6 max-w-lg w-full shadow-lg relative"
            >
                <button
                    className="absolute top-2 right-2  hover:text-red-500"
                    onClick={onClose}
                >
                    <X className="w-6 h-6" />
                </button>

                <h2 className="text-xl font-bold">{job.title}</h2>
                <p className="">{job.location.display_name}</p>

                {job.salary_min && (
                    <p className="text-green-600 font-semibold">
                        Salary: ${job.salary_min} - &{job.salary_max} {job.salary_currency}
                    </p>
                )}

                <div
                    className="mt-4 text-gray-700"
                    dangerouslySetInnerHTML={{ __html: job.description }}
                />

                {/* Display contact details if available */}
                {job.contact_details && (
                    <div className="mt-4">
                        <p className="text-gray-700 font-semibold">Contact:</p>
                        <p className="text-gray-600">{job.contact_details}</p>
                    </div>
                )}

                {/* Display apply link if available */}

                    <div className="mt-4">
                        <a
                            href={job.apply_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800"
                        >
                            Apply Now
                        </a>
                    </div>


                <button
                    onClick={onClose}
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                >
                    Close
                </button>
            </motion.div>
        </div>
    );
};

export default JobDetailsModal;
