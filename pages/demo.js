import React, { useState } from "react";

const InputForm = () => {
  const [formData, setFormData] = useState({
    image: null,
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files && files.length > 0) {
      setFormData({ ...formData, [name]: files[0] });
    }else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Image:", formData.image);
    console.log(
      "Image URL:",
      formData.image && URL.createObjectURL(formData.image)
    );
    console.log("Name:", formData.name);
    console.log("Description:", formData.description);

    setFormData({
      image: null,
      name: "",
      description: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputForm;
