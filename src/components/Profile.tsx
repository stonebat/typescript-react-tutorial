import * as React from 'react';

interface Props {
  name: string;
  job: string;
}

const Profile = ({name, job}: Props) => (
  <div>
    <h1>Profile</h1>
    <div>
      <b>Name: </b>
      {name}
    </div>
    <div>
      <b>Profession: </b>
      {job}
    </div>
  </div>
);

export default Profile;
