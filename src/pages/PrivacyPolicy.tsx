import {Link} from "react-router";

const PrivacyPolicy = () => {
  return (
    <div>
      <div style={{ textAlign: "center", margin: 16 }}>
        <h1 style={{ fontWeight: 700, marginBottom: 24 }}>Privacy Policy</h1>
        <p>We do not collect any personal data or information from our users.</p>
        <Link to="/about">Go Back</Link>
      </div>
    </div>

  );
};

export default PrivacyPolicy;