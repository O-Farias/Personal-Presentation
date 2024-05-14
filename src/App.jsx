import Profile from "./components/Profile";

export default function App() {
  return (
    <div className="app">
      <Profile
        avatar="https://media.licdn.com/dms/image/D4D03AQFLJXGzcwcKuA/profile-displayphoto-shrink_800_800/0/1709681020024?e=1721260800&v=beta&t=CUKRjaTzXxdOI6I_M18UaTpgCRp3JhZN_CtyZYtL0UA"
        name="Mateus Farias"
        bio="Full-stack javascript developer"
        email="mateus.f2001@hotmail.com"
        phone="+5551982415325"
        githubUrl="https://github.com/O-Farias"
        linkedinUrl="https://www.linkedin.com/in/mateus-farias-b6ab77247/"
        instagramUrl="https://www.instagram.com/_fariasm/"
      />
    </div>
  );
}
