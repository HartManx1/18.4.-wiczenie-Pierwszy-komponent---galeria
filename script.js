var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        img: "https://1.fwcdn.pl/po/05/71/30571/7529392.6.jpg"
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        img: "https://www.mylionking.com/w/images/thumb/4/4e/The_Lion_King_%28comic%29_01.jpg/220px-The_Lion_King_%28comic%29_01.jpg"
    },
    {
        id: 3,
        title: 'Shrek',
        desc: 'Film o ogrze',
        img: "https://upload.wikimedia.org/wikipedia/en/3/39/Shrek.jpg"
    },
    {
        id: 4,
        title: 'Toy Story',
        desc: 'Film o zabawkach',
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Toy_Story.jpg/220px-Toy_Story.jpg"
    }
];


var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },


    render: function () {
        return (
            React.createElement('li', { key: this.props.movie.id, },
                React.createElement(MovieTitle, { title: this.props.movie.title }),
                React.createElement(MovieDesc, { desc: this.props.movie.desc }),
                React.createElement(MovieImage, { img: this.props.movie.img })
            )
        )
    },
});

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },

    render: function () {
        return (
            React.createElement('h2', {}, this.props.title)
        )
    },
});

var MovieDesc = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired,
    },

    render: function () {
        return (
            React.createElement('p', {}, this.props.desc)
        )
    },
});

var MovieImage = React.createClass({
    propTypes: {
        img: React.PropTypes.string.isRequired,
    },

    render: function () {
        return (
            React.createElement('img', { src: this.props.img })
        )
    },
});

var MovieList = React.createClass({
    propTypes: {
        movies: React.PropTypes.array.isRequired,
    },
    render: function () {
        return (
            React.createElement('ul', {}, this.props.movies.map(function (movie) {
                return React.createElement(Movie, {
                    key: movie.id,
                    movie: movie
                })
            }))
        )
    }
});

var element = React.createElement('div', {},
    React.createElement(MovieList, {
        movies: movies
    })
);

ReactDOM.render(element, document.getElementById('app'));

