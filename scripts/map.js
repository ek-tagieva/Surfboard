let myMap;

const init = () => {
    myMap = new ymaps.Map ("map", {
        center: [56.824508, 60.609096],
        zoom: 13
    })
};

ymaps.ready(init);

const coords = [
    [56.81481203, 60.64051036],
    [56.78655694, 60.57356242],
    [56.82930801, 60.60377482]
];

// let myPlacemark = new ymaps.GeoObject({
//     geometry: {
//         type: "Point",
//         coordinates: [56.81481203, 60.64051036]
//     }
// });

const myCollection = new ymaps.GeoObjectCollection({}, {
    // preset: 'islands#redDotIcon',
    draggable: false,
    iconLayout: "default#image",
    iconImageHref: "./img/icons/other/marker.svg",
    iconImageSize: [58,73]
});

coords.forEach(coord => myCollection.add(new ymaps.Placemark(coord)));

myMap.geoObjects.add(myCollection);
