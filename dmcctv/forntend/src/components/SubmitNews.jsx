import React, { useState, useContext } from 'react';
import { NewsContext } from '../context/NewsContext';
import { BiImageAdd, BiError } from 'react-icons/bi';
import '../styles/SubmitNews.css';

const SubmitNews = () => {
  const { submitReport, isLoading } = useContext(NewsContext);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    location: '',
    media: null
  });
  const [errors, setErrors] = useState({});
  const [fileName, setFileName] = useState('');

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.content.trim()) newErrors.content = 'Content is required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    try {
      await submitReport(formData.title, formData.content, formData.location, formData.media);
      setFormData({ title: '', content: '', location: '', media: null });
      setFileName('');
    } catch (error) {
      console.error('Error submitting report:', error);
      setErrors({ submit: 'Failed to submit report. Please try again.' });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, media: file });
      setFileName(file.name);
    }
  };

  return (
    <div className="submit-container">
      <h2 className="submit-title">Submit News Report</h2>
      <form onSubmit={handleSubmit} className="submit-form">
        <div className="form-group">
          <label className="form-label">Title</label>
          <input
            type="text"
            placeholder="Enter news title"
            className="form-input"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
          {errors.title && <span className="error-message">{errors.title}</span>}
        </div>

        <div className="form-group">
          <label className="form-label">Content</label>
          <textarea
            placeholder="Enter news content"
            className="form-textarea"
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          />
          {errors.content && <span className="error-message">{errors.content}</span>}
        </div>

        <div className="form-group">
          <label className="form-label">Location</label>
          <input
            type="text"
            placeholder="Enter location"
            className="form-input"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          />
          {errors.location && <span className="error-message">{errors.location}</span>}
        </div>

        <div className="form-group">
          <label className="form-label">Media</label>
          <div className="file-input-container">
            <label className="file-input-label">
              <BiImageAdd size={20} />
              {fileName || 'Choose image or video'}
            </label>
            <input
              type="file"
              className="file-input"
              accept="image/*,video/*"
              onChange={handleFileChange}
            />
          </div>
        </div>

        {errors.submit && (
          <div className="error-message">
            <BiError /> {errors.submit}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="submit-button"
        >
          {isLoading ? 'Submitting...' : 'Submit Report'}
        </button>
      </form>
    </div>
  );
};

export default SubmitNews;