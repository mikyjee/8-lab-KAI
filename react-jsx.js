const e = React.createElement
function Car(props) {
    /*return (
    <div className="card">
    <div className="card-img">
    <img src={props.car.img} alt={props.car.name} />
    </div>
    <h3>{props.car.name}</h3>
    <p>{props.car.price} $</p>
    </div>
    )*/
    return e('div', { className: 'card' }, [
        e('div', { className: 'card-img', key: 'div' }, e('img', { src: props.car.img, alt: props.car.name })),
        e('h3', { key: 'h3' }, props.car.name),
        e('p', { key: 'p' }, props.car.price)
    ])

}



class App extends React.Component {
    state = {
        cars: [
            { name: 'BMW M2 Coupe', price: '40000', img: 'BMW-M2-Coupe.jpg' },
            { name: 'Audi-A8-Edition', price: '39000', img: 'Audi-A8-Edition-21.jpg' },
            { name: 'bentley-continental-gt', price: '52000', img: 'bentley-continental-gt-speed-black-edition.jpg' },
            { name: 'mercedes-benz-coupe', price: '42000', img: 'mercedes-benz-coupe.jpg' }
        ]
    }
    renderCars() {
        return this.state.cars.map(car => {
            return e(Car, { car: car, key: car.name + Math.random() })

        })
    }
    render() {
        return e(
            'div',
            { className: 'list' },
            this.renderCars()
        )

    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(e(App));