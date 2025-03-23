// TODO: Create an interface for the Candidate objects returned by the API
// import Candidate from "../pages/CandidateSearch";

export interface Candidate {
    login: string;
    name: string;
    location: string;
    avatar_url: string;
    email: string;
    html_url: string;
    company: string;
  }
