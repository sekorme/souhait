"use client";

import React, { useState, useEffect } from "react";
import { Briefcase, MapPin, DollarSign, Search, ChevronLeft, ChevronRight } from "lucide-react";
import JobDetailsModal from "./JobDetailsModal";
import { motion } from "framer-motion";

const ADZUNA_API_ID = "6cf3a985";
const ADZUNA_API_KEY = "85df65836cb63da9c8be340f00b3676e";

interface Job {
    id: string;
    title: string;
    location: {
        display_name: string;
    };
    salary_min?: number;
    salary_max?: number;
    salary_currency?: string;
    description: string; // Added description property
}

const JobListings = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    const [page, setPage] = useState(1);

    // Search filters
    const [country, setCountry] = useState("us");
    const [salary, setSalary] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetchJobs();
    }, [country, salary, searchTerm, page]);

    const fetchJobs = async () => {
        setLoading(true);
        setError(null);
        try {
            const query = new URLSearchParams({
                app_id: ADZUNA_API_ID,
                app_key: ADZUNA_API_KEY,
                results_per_page: "10",
                what: searchTerm,
                salary_min: salary || "0",
            }).toString();

            const response = await fetch(`https://api.adzuna.com/v1/api/jobs/${country}/search/${page}?${query}`);
            if (!response.ok) throw new Error("Failed to fetch jobs");

            const data = await response.json();
            setJobs(data.results || []);
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError("An unknown error occurred");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4 max-w-4xl mx-auto mb-20">
            <h1 className="text-xl font-bold mb-4">Search for Jobs</h1>

            {/* Search Bar */}
            <div className="flex flex-col md:flex-row gap-4 mb-4">
                <input
                    type="text"
                    placeholder="Search job title..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border p-2 rounded w-full"
                />
                <input
                    type="number"
                    placeholder="Min Salary"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                    className="border p-2 rounded w-full"
                />
                <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="border p-2 rounded w-full"
                >
                    <option value="us">USA</option>
                    <option value="ca">Canada</option>
                    <option value="gb">UK</option>
                    <option value="au">Australia</option>
                </select>
                <button
                    onClick={fetchJobs}
                >
                    <Search className="w-5 h-5 mr-2" /> Search
                </button>
            </div>

            {/* Job Listings */}
            {loading && <p className="text-center">Loading jobs...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}
            <ul className="space-y-4">
                {jobs.length === 0 ? (
                    <p>No jobs found.</p>
                ) : (
                    jobs.map((job) => (
                        <li
                            key={job.id}
                            className="p-4 border rounded-lg shadow-sm cursor-pointer dark:hover:bg-neutral-800 transition"
                            onClick={() => setSelectedJob(job)}
                        >
                            <h2 className="font-semibold text-lg flex items-center">
                                <Briefcase className="w-5 h-5 mr-2 text-blue-500" />
                                {job.title}
                            </h2>
                            <p className="text-gray-600 flex items-center">
                                <MapPin className="w-4 h-4 mr-1 text-gray-500" />
                                {job.location.display_name}
                            </p>
                            {job.salary_min && (
                                <p className="text-green-600 flex items-center">
                                    <DollarSign className="w-4 h-4 mr-1 text-green-500" />
                                    {job.salary_min} - {job.salary_max} {job.salary_currency}
                                </p>
                            )}
                            <button
                                className="text-red-500 mt-2 underline"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedJob(job);
                                }}
                            >
                                View Details
                            </button>
                        </li>
                    ))
                )}
            </ul>

            {/* Pagination */}
            <div className="flex justify-center items-center mt-6">
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    className="p-2 mx-2 border rounded disabled:opacity-50"
                    disabled={page === 1}
                >
                    <ChevronLeft />
                </motion.button>
                <span className="text-lg font-semibold">Page {page}</span>
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setPage((prev) => prev + 1)}
                    className="p-2 mx-2 border rounded"
                >
                    <ChevronRight />
                </motion.button>
            </div>

            {/* Job Details Modal */}
            {selectedJob && <JobDetailsModal job={selectedJob} onClose={() => setSelectedJob(null)} />}
        </div>
    );
};

export default JobListings;