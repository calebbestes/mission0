import React from 'react';
import teamdata from './CollegeBasketballTeams.json';
import './App.css';

const teamnames = teamdata.teams;

interface TeamProps {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

function Heading() {
  return (
    <div>
      <h1>Prepare for March Madness</h1>
      <h4>
        This is the ultimate guide to all college basketball teams and their
        locations
      </h4>
    </div>
  );
}

//Class Component
class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div className="container">
        <h2>{oneTeam.school}</h2>
        <h1>{oneTeam.name}</h1>
        <h3>
          {oneTeam.city}, {oneTeam.state}
        </h3>
        <br></br>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div className="container">
      {teamnames.map((oneTeam: TeamProps) => (
        <Team key={oneTeam.tid} {...oneTeam} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Heading />
      <TeamList />
    </div>
  );
}

export default App;
