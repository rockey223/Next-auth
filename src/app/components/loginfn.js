import axios from "axios";

const loginfn = async (email, password) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/customerApi/customerLogin",
      {
        email,
        password,
      }
    );

    if (response.status !== 200) {
      throw new Error("Failed to login");
    }
    console.log("loginfn", response.data);

    return response.data; // or whatever your API returns
  } catch (error) {
    console.error("Error in loginfn:", error);
    throw error;
  }
};

export default loginfn;
