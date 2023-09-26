import "./App.css"

function Avatar(srcInput, altInput, widthInput, heightInput) {
    return (
      <img
        className="avatar"
        src={srcInput}
        alt={altInput}
        width={widthInput}
        height = {heightInput}
      />
    );
  }

  
  export default function Gallery() {
    return (
      <section>
    <Avatar />
      </section>
    );
  }