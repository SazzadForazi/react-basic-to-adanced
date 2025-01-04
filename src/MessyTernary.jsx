export default function MessyTernary({ user, isAdmin, isGuest }) {
    console.log(user, isAdmin, isGuest);
  
    // Decide content based on conditions
    let content;
    
    if (!user) {
      content = <h1>You are not logged in</h1>;
    } else if (isAdmin) {
      content = <h1>Welcome Admin</h1>;
    } else if (isGuest) {
      content = <h1>Welcome Guest</h1>;
    } else {
      content = <h1>Welcome User</h1>; // If user is true but not an admin or guest
    }
  
    return <div>{content}</div>;
  }
  