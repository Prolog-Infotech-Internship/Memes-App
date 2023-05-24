import React, { useState, useEffect } from 'react';

const MemeGenerator = () => {
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeUrl, setMemeUrl] = useState('');

  useEffect(() => {
    fetchTemplates();
  }, []);

  const fetchTemplates = async () => {
    try {
      const response = await fetch('https://api.imgflip.com/get_memes'); // Replace with the actual Memes API endpoint
      const data = await response.json();
      setTemplates(data.templates);
    } catch (error) {
      console.log(error);
    }
  };

  const selectTemplate = (template) => {
    setSelectedTemplate(template);
  };

  const generateMeme = async () => {
    try {
      const response = await fetch('https://api.example.com/memes/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          templateId: selectedTemplate.id,
          topText: topText,
          bottomText: bottomText,
        }),
      });
      const data = await response.json();
      setMemeUrl(data.url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {selectedTemplate ? (
        <div>
          <img src={selectedTemplate.url} alt="Meme Template" />
          <input
            type="text"
            placeholder="Enter top text"
            value={topText}
            onChange={(e) => setTopText(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter bottom text"
            value={bottomText}
            onChange={(e) => setBottomText(e.target.value)}
          />
          <button onClick={generateMeme}>Generate Meme</button>
          {memeUrl && <img src={memeUrl} alt="Generated Meme" />}
        </div>
      ) : (
        <div>
          <h2>Select a meme template:</h2>
          {templates.map((template) => (
            <div key={template.id} onClick={() => selectTemplate(template)}>
              <img src={template.url} alt="Meme Template" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MemeGenerator;
