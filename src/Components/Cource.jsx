import React, { useState } from 'react';

const Courses = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [level, setLevel] = useState('');
  const [description, setDescription] = useState('');
  const [faq, setFaq] = useState([{ question: '', answer: '' }]);
  const [coverImage, setCoverImage] = useState(null);
  const [salesVideo, setSalesVideo] = useState(null);

  const handleFaqChange = (index, field, value) => {
    const newFaq = [...faq];
    newFaq[index][field] = value;
    setFaq(newFaq);
  };

  const handleFileChange = (e, setFile) => {
    setFile(e.target.files[0]);
  };

  return (
    <div>
      <h1>My Courses / Create new course</h1>
      <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <input type="text" placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} />
      <input type="text" placeholder="Level" value={level} onChange={e => setLevel(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      {faq.map((faqItem, index) => (
        <div key={index}>
          <input type="text" placeholder="Question" value={faqItem.question} onChange={e => handleFaqChange(index, 'question', e.target.value)} />
          <input type="text" placeholder="Answer" value={faqItem.answer} onChange={e => handleFaqChange(index, 'answer', e.target.value)} />
        </div>
      ))}
      <input type="file" onChange={e => handleFileChange(e, setCoverImage)} />
      <input type="file" onChange={e => handleFileChange(e, setSalesVideo)} />
      <button>Save as Draft</button>
      <button>Save & Continue</button>
    </div>
  );
};

export default Courses;
