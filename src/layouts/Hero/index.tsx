import './style.scss'

export default function Hero() {
  return (
    <section className='Hero'>
      <div className="Hero__content">
        <h2>Classic suplementos</h2>
        <p>
          confira nossa infinita possibilidades de suplementos
          <br />
          promoções , preços baixos para você!
        </p>
        <button>Saiba mais!</button>
      </div>
      <img className='Hero__background' />
    </section>
  );
}
