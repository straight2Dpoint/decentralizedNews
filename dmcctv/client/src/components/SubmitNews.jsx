import React, { useState } from "react";

const SubmitNews = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [media, setMedia] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Logic to upload media to IPFS and submit news report
    };

    return (
        <div>
            <h2>Submit News Report</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input 
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea 
                        value={content} 
                        onChange={(e) => setContent(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Media Upload:</label>
                    <input 
                        type="file" 
                        onChange={(e) => setMedia(e.target.files[0])} 
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SubmitNews;