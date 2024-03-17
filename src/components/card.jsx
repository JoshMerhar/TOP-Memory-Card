export default function Card({ id, imageURL, onClick }) {

    return (
      <>
        <div className="card" id={id} onClick={onClick}>
          <img className="card-pic" src={imageURL}></img>
        </div>
      </>
    )
}