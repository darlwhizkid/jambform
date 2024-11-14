import { useState } from "react";

function FormComponent() {
  // const [inputValue, setInputValue] = useState("");
  // const [SelectedValue, setSelectedValue] = useState("");
  // const [formData, setFormData] = useState("");
  const [form, setForm] = useState({email: "", password: ""});

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${formData}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  
  
  return (
    <div className="flex flex-col items-center justify-center h-screen">
    <label className="block text-gray-700 text-sm font-bold mb-2">Enter your Email: </label>
      {/* <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      /> */}
      <input type="email" name="email" value={form.email} onChange={handleChange} />
      
      <p>Name{inputValue}</p>
      <label className="block text-gray-700 text-sm font-bold mb-2 mt-4"> Select Country Below</label>    
      <select value={SelectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
        <option value="Nigeria">Nigeria</option>
        <option value="Brazil">Brazil</option>
        <option value="Ghana">Ghana</option>

      </select> 
      <p>Selected Country {SelectedValue}</p>

      <input type="text" value={formData} onChange={(e) => setFormData(e.target.value)} />

      <button className="bg-blue-500 text-white p-2 rounded md" onClick={handleSubmit}>Submit</button>
      
      </div>
  );
}
export default FormComponent;