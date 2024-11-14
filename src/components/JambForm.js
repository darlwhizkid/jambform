import { useState } from "react";

function JambForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    userName: "",
    password: "",
    gender: "",
    dateOfBirth: "",
    nationality: "",
    phoneNumber: "",
    address: "",
    subjects: [],
    comments: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${form.name}\nEmail: ${form.email}\nUsername: ${form.userName}\nPassword: ${form.password}\nGender: ${form.gender}\nDate of Birth: ${form.dateOfBirth}\nNationality: ${form.nationality}\nPhone Number: ${form.phoneNumber}\nAddress: ${form.address}\nSubjects: ${form.subjects} \nComments: ${form.comments}`);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      const updatedSubjects = checked
        ? [...form.subjects, value]
        : form.subjects.filter(subject => subject !== value);
      setForm({ ...form, subjects: updatedSubjects });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">JAMB Registration Form</h1>
        </div>
        <form className="bg-white rounded-lg shadow-xl px-8 pt-6 pb-8 mb-4 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">Full Name</label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">Email Address</label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">Username</label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                name="userName"
                value={form.userName}
                onChange={handleChange}
                placeholder="Choose a username"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">Gender</label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={form.gender === 'male'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Male
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={form.gender === 'female'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Female
                </label>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">Date of Birth</label>
              <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="date"
              name="dateOfBirth"
              value={form.dateOfBirth}
              onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">Nationality</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="nationality"
                value={form.nationality}
                onChange={handleChange}
              >
                <option value="">Select your nationality</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Brazil">Brazil</option>
                <option value="Ghana">Ghana</option>
                <option value="Canada">Canada</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">Phone Number</label>
              <input
              type="tel"
              name="phoneNumber"
              value={form.phoneNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">Address</label>
              <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="address"
              value={form.address}
              onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">Select Your JAMB Subjects</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                <label className="flex items-center hover:bg-white p-2 rounded transition-colors">
                  <input
                    type="checkbox"
                    name="subjects"
                    value="English"
                    checked={form.subjects.includes('English')}
                    onChange={handleChange}
                    className="mr-2 accent-blue-500"
                  />
                  <span>📚 English Language</span>
                </label>
                <label className="flex items-center hover:bg-white p-2 rounded transition-colors">
                  <input
                    type="checkbox"
                    name="subjects"
                    value="Mathematics"
                    checked={form.subjects.includes('Mathematics')}
                    onChange={handleChange}
                    className="mr-2 accent-blue-500"
                  />
                  <span>🔢 Mathematics</span>
                </label>
                <label className="flex items-center hover:bg-white p-2 rounded transition-colors">
                  <input
                    type="checkbox"
                    name="subjects"
                    value="Physics"
                    checked={form.subjects.includes('Physics')}
                    onChange={handleChange}
                    className="mr-2 accent-blue-500"
                  />
                  <span>⚡ Physics</span>
                </label>
                <label className="flex items-center hover:bg-white p-2 rounded transition-colors">
                  <input
                    type="checkbox"
                    name="subjects"
                    value="Chemistry"

                    checked={form.subjects.includes('Chemistry')}
                    onChange={handleChange}
                    className="mr-2 accent-blue-500"
                  />
                  <span>🧪 Chemistry</span>
                </label>
                <label className="flex items-center hover:bg-white p-2 rounded transition-colors">
                  <input
                    type="checkbox"
                    name="subjects"
                    value="Biology"
                    checked={form.subjects.includes('Biology')}
                    onChange={handleChange}
                    className="mr-2 accent-blue-500"
                  />
                  <span>🧬 Biology</span>
                </label>
                <label className="flex items-center hover:bg-white p-2 rounded transition-colors">
                  <input
                    type="checkbox"
                    name="subjects"
                    value="Literature"
                    checked={form.subjects.includes('Literature')}
                    onChange={handleChange}
                    className="mr-2 accent-blue-500"
                  />
                  <span>📖 Literature</span>
                </label>
                <label className="flex items-center hover:bg-white p-2 rounded transition-colors">
                  <input
                    type="checkbox"
                    name="subjects"
                    value="Economics"
                    checked={form.subjects.includes('Economics')}
                    onChange={handleChange}
                    className="mr-2 accent-blue-500"
                  />
                  <span>📊 Economics</span>
                </label>
                <label className="flex items-center hover:bg-white p-2 rounded transition-colors">
                  <input
                    type="checkbox"
                    name="subjects"
                    value="Geography"
                    checked={form.subjects.includes('Geography')}
                    onChange={handleChange}
                    className="mr-2 accent-blue-500"
                  />
                  <span>🌍 Geography</span>
                </label>
                <label className="flex items-center hover:bg-white p-2 rounded transition-colors">
                  <input
                    type="checkbox"
                    name="subjects"
                    value="Government"
                    checked={form.subjects.includes('Government')}
                    onChange={handleChange}
                    className="mr-2 accent-blue-500"
                  />
                  <span>⚖️ Government</span>
                </label>
                <label className="flex items-center hover:bg-white p-2 rounded transition-colors">
                  <input
                    type="checkbox"
                    name="subjects"
                    value="Commerce"
                    checked={form.subjects.includes('Commerce')}
                    onChange={handleChange}
                    className="mr-2 accent-blue-500"
                  />
                  <span>💼 Commerce</span>
                </label>
                <label className="flex items-center hover:bg-white p-2 rounded transition-colors">
                  <input
                    type="checkbox"
                    name="subjects"
                    value="Agriculture"
                    checked={form.subjects.includes('Agriculture')}
                    onChange={handleChange}
                    className="mr-2 accent-blue-500"
                  />
                  <span>🌾 Agriculture</span>
                </label>
                <label className="flex items-center hover:bg-white p-2 rounded transition-colors">
                  <input
                    type="checkbox"
                    name="subjects"
                    value="CRK"
                    checked={form.subjects.includes('CRK')}
                    onChange={handleChange}
                    className="mr-2 accent-blue-500"
                  />
                  <span>✝️ CRK</span>
                </label>
              </div>
            </div>
          </div>          

          <div className="mt-8">
            <button
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-3 px-4 rounded-md hover:from-blue-600 hover:to-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              type="submit"
            >
              Submit Registration
            </button>
          </div>
        </form>
      </div>
    </div>
  );

}
export default JambForm;