import React from 'react';

const Interactive = () => {
  return (
    <div>
      <Toolbar
        onPlayMovie={() => alert("Playing")}
        onUploadImage={() => alert("Uploading")}
      />
    </div>
  );
};

const Toolbar = ({ onPlayMovie, onUploadImage }) => {
  return (
    <div>
      <Button onClick={onPlayMovie}>Play Movie</Button>
      <Button onClick={onUploadImage}>Upload Image</Button>
    </div>
  );
};

const Button = ({ onClick, children }) => {
    return (
        <button onClick={onClick}>{children}</button>
    )
}

export default Interactive