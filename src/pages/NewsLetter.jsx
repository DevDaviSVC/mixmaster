import { Form, redirect, useNavigation } from "react-router-dom";
import SearchFormWrapper from "../assets/wrappers/SearchForm.js";
import axios from "axios";
import { toast } from "react-toastify";

const newsletterURL = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  
  try {
    const response = await axios.post(newsletterURL, data);
    toast.success(response.data.msg);
    return redirect("/");
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  };


  // return redirect("/");
};

const NewsLetter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <SearchFormWrapper>
      <Form
        className="form"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          alignItems: "center",
        }}
        method="POST"
      >
        <h4>Our NewsLetter</h4>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "100%",
          }}
        >
          <div>
            <p>Name</p>
            <input type="text" className="form-input" name="name" required />
          </div>
          <div>
            <p>Last name</p>
            <input
              type="text"
              className="form-input"
              name="lastName"
              required
            />
          </div>
          <div>
            <p>Email</p>
            <input type="email" className="form-input" name="email" required />
          </div>
          <button className="btn" type="submit" disabled={isSubmitting}>
            {isSubmitting ? <div className="loading" style={{width: "10px", height: "10px", margin: "0 auto"}}></div> : "Submit"}
          </button>
        </div>
      </Form>
    </SearchFormWrapper>
  );
};
export default NewsLetter;
