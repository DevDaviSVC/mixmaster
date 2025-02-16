import SearchFormWrapper from "../assets/wrappers/SearchForm.js";

const NewsLetter = () => {
  return (
    <div className="page">
      <SearchFormWrapper>
        <form
          className="form"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            alignItems: "center",
          }}
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
              <input type="text" className="form-input" />
            </div>
            <div>
              <p>Last name</p>
              <input type="text" className="form-input" />
            </div>
            <div>
              <p>Email</p>
              <input type="email" className="form-input" />
            </div>
            <button className="btn" type="submit">Submit</button>
          </div>
        </form>
      </SearchFormWrapper>
    </div>
  );
};
export default NewsLetter;
