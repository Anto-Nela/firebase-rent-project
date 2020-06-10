const {admin,db}=require('../admin &conf/admin');

const allHomes = [
    {
        "img": [
            "https://i.ibb.co/7W6BTwh/home25.jpg",
            "https://i.ibb.co/P4kK0Yd/home23.jpg",
            "https://i.ibb.co/7jphK8k/home4.jpg",
            "https://i.ibb.co/8zx567d/home13.jpg"
        ],
        "price": 1649209,
        "adress": {
            "street": "bulevardi zhan d'ark"
        },
        "area": 76,
        "rooms": 2,
        "type": "Dorm",
        "water": false,
        "electricity": false,
        "enternet": true,
        "floor": 1,
        "condition": "Old",
        "tolalFloors": 1,
        "bathrooms": 2,
        "bedrooms": 2,
        "tenants": 4,
        "parking": false,
        "air_conditioner": true,
        "elevator": false,
        "animals": true,
        "balcony": true,
        "garden": false,
        "kitchenware": false,
        "tv": false,
        "furnished": false,
        "premium": false,
        "location": {
            "lat": 41.315631,
            "long": 19.793808
        },
        "wifi": true,
        "description": "Dorm 2+1 te 9-katshet",
        "landlord": "5eb7f598b8ae6500170078a5"
    },
    {
        "img": [
            "https://i.ibb.co/Wx2s6DP/home14.jpg",
            "https://i.ibb.co/P4kK0Yd/home23.jpg",
            "https://i.ibb.co/XVtLk7F/home7.jpg",
            "https://i.ibb.co/7W6BTwh/home25.jpg"
        ],
        "price": 973303,
        "adress": {
            "street": "deshmoret e kombit"
        },
        "area": 54,
        "rooms": 1,
        "type": "Townhouse",
        "water": true,
        "electricity": true,
        "enternet": true,
        "floor": 2,
        "condition": "New",
        "tolalFloors": 1,
        "bathrooms": 1,
        "bedrooms": 1,
        "tenants": 3,
        "parking": false,
        "air_conditioner": false,
        "elevator": false,
        "animals": false,
        "balcony": true,
        "garden": false,
        "kitchenware": false,
        "tv": false,
        "furnished": true,
        "premium": false,
        "location": {
            "lat": 41.311091000000005,
            "long": 19.855388
        },
        "wifi": true,
        "description": "Townhouse 1+1 te 9-katshet",
        "landlord": "5eb9ba0b82034f267009e168"
    },
    {
        "img": [
            "https://i.ibb.co/tLtPkRv/home2.jpg",
            "https://i.ibb.co/NV0YSb6/home5.jpg",
            "https://i.ibb.co/Sc167GJ/home21.jpg",
            "https://i.ibb.co/k0v8T79/home15.jpg"
        ],
        "price": 1574119,
        "adress": {
            "street": "ushtari i panjohur"
        },
        "area": 77,
        "rooms": 1,
        "type": "Dorm",
        "water": false,
        "electricity": false,
        "enternet": true,
        "floor": 4,
        "condition": "New",
        "tolalFloors": 2,
        "bathrooms": 2,
        "bedrooms": 1,
        "tenants": 1,
        "parking": true,
        "air_conditioner": true,
        "elevator": true,
        "animals": true,
        "balcony": true,
        "garden": false,
        "kitchenware": true,
        "tv": false,
        "furnished": false,
        "premium": false,
        "location": {
            "lat": 41.291093000000004,
            "long": 19.793488
        },
        "wifi": false,
        "description": "Dorm 1+1 te Oxhaku",
        "landlord": "5ea2afe318d7ce0017423414"
    },
    {
        "img": [
            "https://i.ibb.co/NV0YSb6/home5.jpg",
            "https://i.ibb.co/0c25s2n/home29.jpg",
            "https://i.ibb.co/10tcrsZ/home8.jpg",
            "https://i.ibb.co/Sc167GJ/home21.jpg"
        ],
        "price": 1149453,
        "adress": {
            "street": "bulevardi zhan d'ark"
        },
        "area": 89,
        "rooms": 2,
        "type": "Duplex",
        "water": true,
        "electricity": false,
        "enternet": true,
        "floor": 1,
        "condition": "Old",
        "tolalFloors": 1,
        "bathrooms": 2,
        "bedrooms": 2,
        "tenants": 2,
        "parking": true,
        "air_conditioner": true,
        "elevator": false,
        "animals": true,
        "balcony": true,
        "garden": false,
        "kitchenware": false,
        "tv": true,
        "furnished": false,
        "premium": true,
        "location": {
            "lat": 41.342113000000005,
            "long": 19.784104
        },
        "wifi": true,
        "description": "Duplex 2+1 te Vasil Shanto",
        "landlord": "5eb7cbb5cc77430017b4fecf"
    },
    {
        "img": [
            "https://i.ibb.co/XVtLk7F/home7.jpg",
            "https://i.ibb.co/3F26Rbb/home3.jpg",
            "https://i.ibb.co/NV0YSb6/home5.jpg",
            "https://i.ibb.co/k0v8T79/home15.jpg"
        ],
        "price": 1838558,
        "adress": {
            "street": "deshmoret e kombit"
        },
        "area": 84,
        "rooms": 5,
        "type": "Bungalow",
        "water": false,
        "electricity": true,
        "enternet": true,
        "floor": 1,
        "condition": "New",
        "tolalFloors": 3,
        "bathrooms": 2,
        "bedrooms": 1,
        "tenants": 2,
        "parking": true,
        "air_conditioner": true,
        "elevator": false,
        "animals": true,
        "balcony": true,
        "garden": false,
        "kitchenware": false,
        "tv": false,
        "furnished": true,
        "premium": false,
        "location": {
            "lat": 41.311382,
            "long": 19.81585
        },
        "wifi": false,
        "description": "Bungalow 5+1 te Ali Demi",
        "landlord": "5ea2afe318d7ce0017423414"
    },
    {
        "img": [
            "https://i.ibb.co/F8YR93k/home27.jpg",
            "https://i.ibb.co/k0v8T79/home15.jpg",
            "https://i.ibb.co/Sc167GJ/home21.jpg",
            "https://i.ibb.co/yFnmHvB/home12.jpg"
        ],
        "price": 387592,
        "adress": {
            "street": "arkitetkt sinani"
        },
        "area": 70,
        "rooms": 3,
        "type": "Apartment",
        "water": false,
        "electricity": false,
        "enternet": true,
        "floor": 1,
        "condition": "New",
        "tolalFloors": 4,
        "bathrooms": 2,
        "bedrooms": 3,
        "tenants": 1,
        "parking": false,
        "air_conditioner": true,
        "elevator": true,
        "animals": false,
        "balcony": false,
        "garden": true,
        "kitchenware": true,
        "tv": true,
        "furnished": false,
        "premium": true,
        "location": {
            "lat": 41.295593000000004,
            "long": 19.837533
        },
        "wifi": true,
        "description": "Apartment 3+1 te 9-katshet",
        "landlord": "5e9ce482c7c4404594c9719a"
    },
    {
        "img": [
            "https://i.ibb.co/qBqx5h8/home26.jpg",
            "https://i.ibb.co/7W6BTwh/home25.jpg",
            "https://i.ibb.co/F8YR93k/home27.jpg",
            "https://i.ibb.co/yFnmHvB/home12.jpg"
        ],
        "price": 835258,
        "adress": {
            "street": "arkitetkt sinani"
        },
        "area": 63,
        "rooms": 1,
        "type": "Apartment",
        "water": true,
        "electricity": true,
        "enternet": false,
        "floor": 4,
        "condition": "New",
        "tolalFloors": 4,
        "bathrooms": 2,
        "bedrooms": 1,
        "tenants": 4,
        "parking": true,
        "air_conditioner": true,
        "elevator": false,
        "animals": false,
        "balcony": true,
        "garden": true,
        "kitchenware": false,
        "tv": false,
        "furnished": true,
        "premium": false,
        "location": {
            "lat": 41.310442,
            "long": 19.856558
        },
        "wifi": false,
        "description": "Apartment 1+1 te Vasil Shanto",
        "landlord": "5eb7f836e2232e001764ddc0"
    },
    {
        "img": [
            "https://i.ibb.co/7W6BTwh/home25.jpg",
            "https://i.ibb.co/yFnmHvB/home12.jpg",
            "https://i.ibb.co/yYRHfXS/home16.jpg",
            "https://i.ibb.co/Wx2s6DP/home14.jpg"
        ],
        "price": 558869,
        "adress": {
            "street": "qemal stava"
        },
        "area": 58,
        "rooms": 5,
        "type": "Studio",
        "water": false,
        "electricity": true,
        "enternet": true,
        "floor": 2,
        "condition": "Construction",
        "tolalFloors": 4,
        "bathrooms": 2,
        "bedrooms": 1,
        "tenants": 3,
        "parking": true,
        "air_conditioner": true,
        "elevator": true,
        "animals": false,
        "balcony": true,
        "garden": true,
        "kitchenware": true,
        "tv": false,
        "furnished": true,
        "premium": false,
        "location": {
            "lat": 41.331443,
            "long": 19.800838
        },
        "wifi": false,
        "description": "Studio 5+1 te Ali Demi",
        "landlord": "5eb7f598b8ae6500170078a5"
    },
    {
        "img": [
            "https://i.ibb.co/9gzRq4x/home17.jpg",
            "https://i.ibb.co/Sc167GJ/home21.jpg",
            "https://i.ibb.co/tLtPkRv/home2.jpg",
            "https://i.ibb.co/qBqx5h8/home26.jpg"
        ],
        "price": 591310,
        "adress": {
            "street": "ushtari i panjohur"
        },
        "area": 93,
        "rooms": 4,
        "type": "Studio",
        "water": true,
        "electricity": true,
        "enternet": false,
        "floor": 2,
        "condition": "New",
        "tolalFloors": 1,
        "bathrooms": 2,
        "bedrooms": 1,
        "tenants": 1,
        "parking": false,
        "air_conditioner": false,
        "elevator": false,
        "animals": true,
        "balcony": false,
        "garden": false,
        "kitchenware": false,
        "tv": true,
        "furnished": true,
        "premium": true,
        "location": {
            "lat": 41.331115000000004,
            "long": 19.801848
        },
        "wifi": false,
        "description": "Studio 4+1 te Qytet Studenti",
        "landlord": "5ea2afe318d7ce0017423414"
    },
    {
        "img": [
            "https://i.ibb.co/Sc167GJ/home21.jpg",
            "https://i.ibb.co/sb5L8vZ/home22.jpg",
            "https://i.ibb.co/Z24LxrY/home9.jpg",
            "https://i.ibb.co/XSmjg0V/home28.jpg"
        ],
        "price": 470801,
        "adress": {
            "street": "qemal stava"
        },
        "area": 57,
        "rooms": 1,
        "type": "Dorm",
        "water": false,
        "electricity": true,
        "enternet": false,
        "floor": 2,
        "condition": "New",
        "tolalFloors": 3,
        "bathrooms": 2,
        "bedrooms": 2,
        "tenants": 1,
        "parking": false,
        "air_conditioner": false,
        "elevator": false,
        "animals": true,
        "balcony": false,
        "garden": false,
        "kitchenware": false,
        "tv": true,
        "furnished": true,
        "premium": true,
        "location": {
            "lat": 41.311815,
            "long": 19.836152
        },
        "wifi": true,
        "description": "Dorm 1+1 te Vorribomit",
        "landlord": "5eb7f598b8ae6500170078a5"
    },
    {
        "img": [
            "https://i.ibb.co/XVtLk7F/home7.jpg",
            "https://i.ibb.co/Sc167GJ/home21.jpg",
            "https://i.ibb.co/jHZRp8J/home20.jpg",
            "https://i.ibb.co/8zx567d/home13.jpg"
        ],
        "price": 708818,
        "adress": {
            "street": "arkitetkt sinani"
        },
        "area": 60,
        "rooms": 2,
        "type": "Apartment",
        "water": false,
        "electricity": false,
        "enternet": true,
        "floor": 1,
        "condition": "Old",
        "tolalFloors": 4,
        "bathrooms": 1,
        "bedrooms": 2,
        "tenants": 2,
        "parking": false,
        "air_conditioner": false,
        "elevator": false,
        "animals": false,
        "balcony": false,
        "garden": true,
        "kitchenware": false,
        "tv": false,
        "furnished": false,
        "premium": true,
        "location": {
            "lat": 41.344793,
            "long": 19.826340000000002
        },
        "wifi": true,
        "description": "Apartment 2+1 te 15-katshi",
        "landlord": "5eb9ba0b82034f267009e168"
    },
    {
        "img": [
            "https://i.ibb.co/0c25s2n/home29.jpg",
            "https://i.ibb.co/Sc167GJ/home21.jpg",
            "https://i.ibb.co/XVtLk7F/home7.jpg",
            "https://i.ibb.co/JHyjxrt/home24.jpg"
        ],
        "price": 153026,
        "adress": {
            "street": "deshmoret e kombit"
        },
        "area": 59,
        "rooms": 2,
        "type": "Condo",
        "water": true,
        "electricity": false,
        "enternet": true,
        "floor": 4,
        "condition": "New",
        "tolalFloors": 1,
        "bathrooms": 1,
        "bedrooms": 2,
        "tenants": 3,
        "parking": false,
        "air_conditioner": true,
        "elevator": false,
        "animals": true,
        "balcony": false,
        "garden": false,
        "kitchenware": false,
        "tv": false,
        "furnished": false,
        "premium": true,
        "location": {
            "lat": 41.356913000000006,
            "long": 19.852837
        },
        "wifi": true,
        "description": "Condo 2+1 te Oxhaku",
        "landlord": "5ea2afe318d7ce0017423414"
    },
    {
        "img": [
            "https://i.ibb.co/yFnmHvB/home12.jpg",
            "https://i.ibb.co/F8YR93k/home27.jpg",
            "https://i.ibb.co/k0v8T79/home15.jpg",
            "https://i.ibb.co/k0v8T79/home15.jpg"
        ],
        "price": 436968,
        "adress": {
            "street": "selman riza"
        },
        "area": 79,
        "rooms": 1,
        "type": "Studio",
        "water": true,
        "electricity": false,
        "enternet": true,
        "floor": 2,
        "condition": "Old",
        "tolalFloors": 1,
        "bathrooms": 2,
        "bedrooms": 3,
        "tenants": 3,
        "parking": false,
        "air_conditioner": true,
        "elevator": false,
        "animals": true,
        "balcony": true,
        "garden": false,
        "kitchenware": true,
        "tv": false,
        "furnished": false,
        "premium": false,
        "location": {
            "lat": 41.361655000000006,
            "long": 19.78999
        },
        "wifi": true,
        "description": "Studio 1+1 te Brryli",
        "landlord": "5eb7f598b8ae6500170078a5"
    },
    {
        "img": [
            "https://i.ibb.co/HXSDJWp/home6.jpg",
            "https://i.ibb.co/NV0YSb6/home5.jpg",
            "https://i.ibb.co/XSmjg0V/home28.jpg",
            "https://i.ibb.co/NV0YSb6/home5.jpg"
        ],
        "price": 1837432,
        "adress": {
            "street": "bulevardi zhan d'ark"
        },
        "area": 59,
        "rooms": 3,
        "type": "Bungalow",
        "water": true,
        "electricity": false,
        "enternet": false,
        "floor": 4,
        "condition": "Old",
        "tolalFloors": 4,
        "bathrooms": 2,
        "bedrooms": 2,
        "tenants": 3,
        "parking": true,
        "air_conditioner": false,
        "elevator": true,
        "animals": false,
        "balcony": true,
        "garden": true,
        "kitchenware": false,
        "tv": false,
        "furnished": true,
        "premium": false,
        "location": {
            "lat": 41.300387,
            "long": 19.807905
        },
        "wifi": false,
        "description": "Bungalow 3+1 te Qytet Studenti",
        "landlord": "5e9ce482c7c4404594c9719a"
    },
    {
        "img": [
            "https://i.ibb.co/yFnmHvB/home12.jpg",
            "https://i.ibb.co/XSmjg0V/home28.jpg",
            "https://i.ibb.co/yYSxgR8/home10.jpg",
            "https://i.ibb.co/Z24LxrY/home9.jpg"
        ],
        "price": 136253,
        "adress": {
            "street": "ushtari i panjohur"
        },
        "area": 90,
        "rooms": 3,
        "type": "Condo",
        "water": true,
        "electricity": true,
        "enternet": false,
        "floor": 2,
        "condition": "Construction",
        "tolalFloors": 2,
        "bathrooms": 1,
        "bedrooms": 2,
        "tenants": 1,
        "parking": true,
        "air_conditioner": false,
        "elevator": false,
        "animals": true,
        "balcony": false,
        "garden": false,
        "kitchenware": true,
        "tv": false,
        "furnished": false,
        "premium": false,
        "location": {
            "lat": 41.358051,
            "long": 19.803244
        },
        "wifi": false,
        "description": "Condo 3+1 te Ali Demi",
        "landlord": "5ea2afe318d7ce0017423414"
    },
    {
        "img": [
            "https://i.ibb.co/k0v8T79/home15.jpg",
            "https://i.ibb.co/Wx2s6DP/home14.jpg",
            "https://i.ibb.co/yYRHfXS/home16.jpg",
            "https://i.ibb.co/tLtPkRv/home2.jpg"
        ],
        "price": 1154629,
        "adress": {
            "street": "deshmoret e kombit"
        },
        "area": 54,
        "rooms": 1,
        "type": "Studio",
        "water": true,
        "electricity": false,
        "enternet": false,
        "floor": 2,
        "condition": "New",
        "tolalFloors": 4,
        "bathrooms": 2,
        "bedrooms": 1,
        "tenants": 4,
        "parking": false,
        "air_conditioner": true,
        "elevator": true,
        "animals": true,
        "balcony": true,
        "garden": true,
        "kitchenware": false,
        "tv": false,
        "furnished": false,
        "premium": true,
        "location": {
            "lat": 41.311798,
            "long": 19.819435
        },
        "wifi": true,
        "description": "Studio 1+1 te Vasil Shanto",
        "landlord": "5ea2afe318d7ce0017423414"
    },
    {
        "img": [
            "https://i.ibb.co/Sc167GJ/home21.jpg",
            "https://i.ibb.co/10tcrsZ/home8.jpg",
            "https://i.ibb.co/XVtLk7F/home7.jpg",
            "https://i.ibb.co/10tcrsZ/home8.jpg"
        ],
        "price": 684552,
        "adress": {
            "street": "1 maji"
        },
        "area": 62,
        "rooms": 5,
        "type": "Condo",
        "water": false,
        "electricity": true,
        "enternet": false,
        "floor": 2,
        "condition": "Construction",
        "tolalFloors": 2,
        "bathrooms": 1,
        "bedrooms": 3,
        "tenants": 4,
        "parking": true,
        "air_conditioner": true,
        "elevator": false,
        "animals": true,
        "balcony": true,
        "garden": false,
        "kitchenware": true,
        "tv": true,
        "furnished": true,
        "premium": true,
        "location": {
            "lat": 41.330013,
            "long": 19.787035
        },
        "wifi": true,
        "description": "Condo 5+1 te Bulevardi Zhan D'Ark",
        "landlord": "5eb7cbb5cc77430017b4fecf"
    },
    {
        "img": [
            "https://i.ibb.co/3F26Rbb/home3.jpg",
            "https://i.ibb.co/yYRHfXS/home16.jpg",
            "https://i.ibb.co/NV0YSb6/home5.jpg",
            "https://i.ibb.co/10tcrsZ/home8.jpg"
        ],
        "price": 511571,
        "adress": {
            "street": "bulevardi zhan d'ark"
        },
        "area": 78,
        "rooms": 5,
        "type": "Duplex",
        "water": false,
        "electricity": true,
        "enternet": false,
        "floor": 1,
        "condition": "Old",
        "tolalFloors": 2,
        "bathrooms": 1,
        "bedrooms": 3,
        "tenants": 4,
        "parking": true,
        "air_conditioner": false,
        "elevator": true,
        "animals": true,
        "balcony": false,
        "garden": false,
        "kitchenware": true,
        "tv": true,
        "furnished": true,
        "premium": true,
        "location": {
            "lat": 41.313234,
            "long": 19.804291
        },
        "wifi": true,
        "description": "Duplex 5+1 te Brryli",
        "landlord": "5ea2afe318d7ce0017423414"
    },
    {
        "img": [
            "https://i.ibb.co/tLtPkRv/home2.jpg",
            "https://i.ibb.co/Z24LxrY/home9.jpg",
            "https://i.ibb.co/XVtLk7F/home7.jpg",
            "https://i.ibb.co/3F26Rbb/home3.jpg"
        ],
        "price": 1447144,
        "adress": {
            "street": "endri keko"
        },
        "area": 53,
        "rooms": 4,
        "type": "Duplex",
        "water": true,
        "electricity": false,
        "enternet": true,
        "floor": 3,
        "condition": "Construction",
        "tolalFloors": 3,
        "bathrooms": 1,
        "bedrooms": 1,
        "tenants": 3,
        "parking": false,
        "air_conditioner": false,
        "elevator": false,
        "animals": false,
        "balcony": false,
        "garden": true,
        "kitchenware": true,
        "tv": true,
        "furnished": true,
        "premium": true,
        "location": {
            "lat": 41.320545,
            "long": 19.818691
        },
        "wifi": false,
        "description": "Duplex 4+1 te Xhamlliku",
        "landlord": "5e9ce482c7c4404594c9719a"
    },
    {
        "img": [
            "https://i.ibb.co/yFnmHvB/home12.jpg",
            "https://i.ibb.co/sb5L8vZ/home22.jpg",
            "https://i.ibb.co/10tcrsZ/home8.jpg",
            "https://i.ibb.co/NV0YSb6/home5.jpg"
        ],
        "price": 1603115,
        "adress": {
            "street": "deshmoret e kombit"
        },
        "area": 94,
        "rooms": 1,
        "type": "Studio",
        "water": false,
        "electricity": true,
        "enternet": true,
        "floor": 3,
        "condition": "New",
        "tolalFloors": 1,
        "bathrooms": 2,
        "bedrooms": 2,
        "tenants": 4,
        "parking": true,
        "air_conditioner": true,
        "elevator": false,
        "animals": false,
        "balcony": false,
        "garden": false,
        "kitchenware": true,
        "tv": true,
        "furnished": true,
        "premium": true,
        "location": {
            "lat": 41.317706,
            "long": 19.786156000000002
        },
        "wifi": false,
        "description": "Studio 1+1 te Ali Demi",
        "landlord": "5eb7f598b8ae6500170078a5"
    },
    {
        "img": [
            "https://i.ibb.co/3F26Rbb/home3.jpg",
            "https://i.ibb.co/JHyjxrt/home24.jpg",
            "https://i.ibb.co/NV0YSb6/home5.jpg",
            "https://i.ibb.co/jHZRp8J/home20.jpg"
        ],
        "price": 459823,
        "adress": {
            "street": "selman riza"
        },
        "area": 91,
        "rooms": 5,
        "type": "Townhouse",
        "water": false,
        "electricity": false,
        "enternet": true,
        "floor": 2,
        "condition": "Old",
        "tolalFloors": 4,
        "bathrooms": 1,
        "bedrooms": 2,
        "tenants": 4,
        "parking": true,
        "air_conditioner": true,
        "elevator": false,
        "animals": false,
        "balcony": true,
        "garden": true,
        "kitchenware": false,
        "tv": false,
        "furnished": false,
        "premium": true,
        "location": {
            "lat": 41.309598,
            "long": 19.814429
        },
        "wifi": true,
        "description": "Townhouse 5+1 te Vorribomit",
        "landlord": "5eb7f598b8ae6500170078a5"
    },
    {
        "img": [
            "https://i.ibb.co/tLtPkRv/home2.jpg",
            "https://i.ibb.co/k0v8T79/home15.jpg",
            "https://i.ibb.co/3F26Rbb/home3.jpg",
            "https://i.ibb.co/P4kK0Yd/home23.jpg"
        ],
        "price": 669926,
        "adress": {
            "street": "qemal stava"
        },
        "area": 70,
        "rooms": 5,
        "type": "Apartment",
        "water": false,
        "electricity": false,
        "enternet": false,
        "floor": 4,
        "condition": "New",
        "tolalFloors": 4,
        "bathrooms": 2,
        "bedrooms": 3,
        "tenants": 2,
        "parking": true,
        "air_conditioner": false,
        "elevator": false,
        "animals": false,
        "balcony": true,
        "garden": true,
        "kitchenware": true,
        "tv": false,
        "furnished": false,
        "premium": true,
        "location": {
            "lat": 41.313377,
            "long": 19.79739
        },
        "wifi": true,
        "description": "Apartment 5+1 te Vasil Shanto",
        "landlord": "5eb9ba0b82034f267009e168"
    },
    {
        "img": [
            "https://i.ibb.co/Sc167GJ/home21.jpg",
            "https://i.ibb.co/q7XwJsj/home1.jpg",
            "https://i.ibb.co/10tcrsZ/home8.jpg",
            "https://i.ibb.co/Sc167GJ/home21.jpg"
        ],
        "price": 834788,
        "adress": {
            "street": "bulevardi zhan d'ark"
        },
        "area": 92,
        "rooms": 2,
        "type": "Duplex",
        "water": true,
        "electricity": true,
        "enternet": false,
        "floor": 1,
        "condition": "New",
        "tolalFloors": 3,
        "bathrooms": 2,
        "bedrooms": 1,
        "tenants": 1,
        "parking": false,
        "air_conditioner": false,
        "elevator": false,
        "animals": false,
        "balcony": false,
        "garden": true,
        "kitchenware": true,
        "tv": false,
        "furnished": false,
        "premium": true,
        "location": {
            "lat": 41.299003000000006,
            "long": 19.836056
        },
        "wifi": false,
        "description": "Duplex 2+1 te Xhamlliku",
        "landlord": "5eb7f836e2232e001764ddc0"
    },
    {
        "img": [
            "https://i.ibb.co/3F26Rbb/home3.jpg",
            "https://i.ibb.co/7jphK8k/home4.jpg",
            "https://i.ibb.co/yYSxgR8/home10.jpg",
            "https://i.ibb.co/qBqx5h8/home26.jpg"
        ],
        "price": 396538,
        "adress": {
            "street": "selman riza"
        },
        "area": 58,
        "rooms": 3,
        "type": "Bungalow",
        "water": true,
        "electricity": true,
        "enternet": false,
        "floor": 2,
        "condition": "New",
        "tolalFloors": 2,
        "bathrooms": 1,
        "bedrooms": 3,
        "tenants": 4,
        "parking": false,
        "air_conditioner": false,
        "elevator": true,
        "animals": false,
        "balcony": false,
        "garden": false,
        "kitchenware": true,
        "tv": true,
        "furnished": false,
        "premium": false,
        "location": {
            "lat": 41.323508000000004,
            "long": 19.798921
        },
        "wifi": true,
        "description": "Bungalow 3+1 te 15-katshi",
        "landlord": "5ea2afe318d7ce0017423414"
    },
    {
        "img": [
            "https://i.ibb.co/7W6BTwh/home25.jpg",
            "https://i.ibb.co/q7XwJsj/home1.jpg",
            "https://i.ibb.co/k0v8T79/home15.jpg",
            "https://i.ibb.co/tLtPkRv/home2.jpg"
        ],
        "price": 1020772,
        "adress": {
            "street": "qemal stava"
        },
        "area": 96,
        "rooms": 3,
        "type": "Condo",
        "water": true,
        "electricity": false,
        "enternet": false,
        "floor": 4,
        "condition": "Old",
        "tolalFloors": 4,
        "bathrooms": 2,
        "bedrooms": 1,
        "tenants": 4,
        "parking": false,
        "air_conditioner": true,
        "elevator": true,
        "animals": false,
        "balcony": false,
        "garden": false,
        "kitchenware": true,
        "tv": true,
        "furnished": true,
        "premium": true,
        "location": {
            "lat": 41.362778000000006,
            "long": 19.785315
        },
        "wifi": true,
        "description": "Condo 3+1 te Oxhaku",
        "landlord": "5ea2afe318d7ce0017423414"
    },
    {
        "img": [
            "https://i.ibb.co/F8YR93k/home27.jpg",
            "https://i.ibb.co/k0v8T79/home15.jpg",
            "https://i.ibb.co/tLtPkRv/home2.jpg",
            "https://i.ibb.co/yYSxgR8/home10.jpg"
        ],
        "price": 868042,
        "adress": {
            "street": "qemal stava"
        },
        "area": 70,
        "rooms": 5,
        "type": "Apartment",
        "water": false,
        "electricity": false,
        "enternet": false,
        "floor": 1,
        "condition": "Construction",
        "tolalFloors": 2,
        "bathrooms": 2,
        "bedrooms": 3,
        "tenants": 3,
        "parking": true,
        "air_conditioner": true,
        "elevator": true,
        "animals": true,
        "balcony": true,
        "garden": true,
        "kitchenware": true,
        "tv": false,
        "furnished": true,
        "premium": true,
        "location": {
            "lat": 41.306949,
            "long": 19.819807
        },
        "wifi": false,
        "description": "Apartment 5+1 te Oxhaku",
        "landlord": "5eb7f598b8ae6500170078a5"
    },
    {
        "img": [
            "https://i.ibb.co/tLtPkRv/home2.jpg",
            "https://i.ibb.co/Sc167GJ/home21.jpg",
            "https://i.ibb.co/Sc167GJ/home21.jpg",
            "https://i.ibb.co/Z24LxrY/home9.jpg"
        ],
        "price": 382878,
        "adress": {
            "street": "ushtari i panjohur"
        },
        "area": 78,
        "rooms": 2,
        "type": "Apartment",
        "water": true,
        "electricity": true,
        "enternet": true,
        "floor": 3,
        "condition": "Construction",
        "tolalFloors": 3,
        "bathrooms": 2,
        "bedrooms": 2,
        "tenants": 3,
        "parking": false,
        "air_conditioner": false,
        "elevator": false,
        "animals": true,
        "balcony": true,
        "garden": false,
        "kitchenware": false,
        "tv": true,
        "furnished": false,
        "premium": false,
        "location": {
            "lat": 41.34678400000001,
            "long": 19.856236
        },
        "wifi": false,
        "description": "Apartment 2+1 te 15-katshi",
        "landlord": "5eb7f836e2232e001764ddc0"
    },
    {
        "img": [
            "https://i.ibb.co/7jphK8k/home4.jpg",
            "https://i.ibb.co/10tcrsZ/home8.jpg",
            "https://i.ibb.co/q7XwJsj/home1.jpg",
            "https://i.ibb.co/q7XwJsj/home1.jpg"
        ],
        "price": 1153645,
        "adress": {
            "street": "1 maji"
        },
        "area": 98,
        "rooms": 2,
        "type": "Dorm",
        "water": true,
        "electricity": true,
        "enternet": false,
        "floor": 3,
        "condition": "Construction",
        "tolalFloors": 1,
        "bathrooms": 1,
        "bedrooms": 2,
        "tenants": 1,
        "parking": false,
        "air_conditioner": false,
        "elevator": false,
        "animals": true,
        "balcony": true,
        "garden": true,
        "kitchenware": false,
        "tv": true,
        "furnished": false,
        "premium": false,
        "location": {
            "lat": 41.35499600000001,
            "long": 19.820785
        },
        "wifi": false,
        "description": "Dorm 2+1 te Vasil Shanto",
        "landlord": "5e9ce482c7c4404594c9719a"
    },
    {
        "img": [
            "https://i.ibb.co/q7XwJsj/home1.jpg",
            "https://i.ibb.co/7jphK8k/home4.jpg",
            "https://i.ibb.co/yYSxgR8/home10.jpg",
            "https://i.ibb.co/q7XwJsj/home1.jpg"
        ],
        "price": 205725,
        "adress": {
            "street": "selman riza"
        },
        "area": 99,
        "rooms": 1,
        "type": "Apartment",
        "water": false,
        "electricity": false,
        "enternet": true,
        "floor": 1,
        "condition": "Construction",
        "tolalFloors": 2,
        "bathrooms": 1,
        "bedrooms": 3,
        "tenants": 1,
        "parking": false,
        "air_conditioner": true,
        "elevator": false,
        "animals": false,
        "balcony": false,
        "garden": true,
        "kitchenware": false,
        "tv": true,
        "furnished": true,
        "premium": true,
        "location": {
            "lat": 41.336772,
            "long": 19.824353
        },
        "wifi": false,
        "description": "Apartment 1+1 te Bulevardi Zhan D'Ark",
        "landlord": "5eb9ba0b82034f267009e168"
    },
    {
        "img": [
            "https://i.ibb.co/XVtLk7F/home7.jpg",
            "https://i.ibb.co/3F26Rbb/home3.jpg",
            "https://i.ibb.co/XSmjg0V/home28.jpg",
            "https://i.ibb.co/XVtLk7F/home7.jpg"
        ],
        "price": 846910,
        "adress": {
            "street": "bulevardi zhan d'ark"
        },
        "area": 51,
        "rooms": 1,
        "type": "Studio",
        "water": true,
        "electricity": false,
        "enternet": true,
        "floor": 3,
        "condition": "Construction",
        "tolalFloors": 2,
        "bathrooms": 1,
        "bedrooms": 1,
        "tenants": 3,
        "parking": true,
        "air_conditioner": true,
        "elevator": false,
        "animals": false,
        "balcony": false,
        "garden": false,
        "kitchenware": true,
        "tv": true,
        "furnished": false,
        "premium": true,
        "location": {
            "lat": 41.312381,
            "long": 19.809759
        },
        "wifi": true,
        "description": "Studio 1+1 te Qytet Studenti",
        "landlord": "5eb9ba0b82034f267009e168"
    },
    {
        "img": [
            "https://i.ibb.co/yFnmHvB/home12.jpg",
            "https://i.ibb.co/jHZRp8J/home20.jpg",
            "https://i.ibb.co/q7XwJsj/home1.jpg",
            "https://i.ibb.co/3F26Rbb/home3.jpg"
        ],
        "price": 1581204,
        "adress": {
            "street": "endri keko"
        },
        "area": 96,
        "rooms": 2,
        "type": "Townhouse",
        "water": true,
        "electricity": false,
        "enternet": false,
        "floor": 4,
        "condition": "New",
        "tolalFloors": 4,
        "bathrooms": 2,
        "bedrooms": 3,
        "tenants": 4,
        "parking": false,
        "air_conditioner": false,
        "elevator": false,
        "animals": false,
        "balcony": false,
        "garden": true,
        "kitchenware": true,
        "tv": false,
        "furnished": true,
        "premium": false,
        "location": {
            "lat": 41.317083000000004,
            "long": 19.851715
        },
        "wifi": true,
        "description": "Townhouse 2+1 te Bulevardi Zhan D'Ark",
        "landlord": "5ea2afe318d7ce0017423414"
    },
    {
        "img": [
            "https://i.ibb.co/TYPS3tf/home11.jpg",
            "https://i.ibb.co/tLtPkRv/home2.jpg",
            "https://i.ibb.co/0c25s2n/home29.jpg",
            "https://i.ibb.co/JHyjxrt/home24.jpg"
        ],
        "price": 1951381,
        "adress": {
            "street": "selman riza"
        },
        "area": 50,
        "rooms": 4,
        "type": "Condo",
        "water": true,
        "electricity": false,
        "enternet": true,
        "floor": 3,
        "condition": "New",
        "tolalFloors": 2,
        "bathrooms": 1,
        "bedrooms": 3,
        "tenants": 3,
        "parking": true,
        "air_conditioner": true,
        "elevator": true,
        "animals": true,
        "balcony": false,
        "garden": false,
        "kitchenware": true,
        "tv": true,
        "furnished": true,
        "premium": false,
        "location": {
            "lat": 41.349869000000005,
            "long": 19.852845
        },
        "wifi": true,
        "description": "Condo 4+1 te Brryli",
        "landlord": "5eb7f598b8ae6500170078a5"
    },
    {
        "img": [
            "https://i.ibb.co/Z24LxrY/home9.jpg",
            "https://i.ibb.co/TYPS3tf/home11.jpg",
            "https://i.ibb.co/P4kK0Yd/home23.jpg",
            "https://i.ibb.co/Z24LxrY/home9.jpg"
        ],
        "price": 750009,
        "adress": {
            "street": "endri keko"
        },
        "area": 87,
        "rooms": 4,
        "type": "Studio",
        "water": false,
        "electricity": false,
        "enternet": false,
        "floor": 4,
        "condition": "New",
        "tolalFloors": 2,
        "bathrooms": 2,
        "bedrooms": 1,
        "tenants": 4,
        "parking": true,
        "air_conditioner": true,
        "elevator": false,
        "animals": false,
        "balcony": false,
        "garden": false,
        "kitchenware": true,
        "tv": false,
        "furnished": true,
        "premium": true,
        "location": {
            "lat": 41.29580300000001,
            "long": 19.80556
        },
        "wifi": false,
        "description": "Studio 4+1 te Vorribomit",
        "landlord": "5e9ce482c7c4404594c9719a"
    },
    {
        "img": [
            "https://i.ibb.co/Z24LxrY/home9.jpg",
            "https://i.ibb.co/XVtLk7F/home7.jpg",
            "https://i.ibb.co/jHZRp8J/home20.jpg",
            "https://i.ibb.co/9gzRq4x/home17.jpg"
        ],
        "price": 1851912,
        "adress": {
            "street": "ushtari i panjohur"
        },
        "area": 65,
        "rooms": 3,
        "type": "Bungalow",
        "water": true,
        "electricity": false,
        "enternet": true,
        "floor": 4,
        "condition": "Old",
        "tolalFloors": 1,
        "bathrooms": 2,
        "bedrooms": 2,
        "tenants": 3,
        "parking": true,
        "air_conditioner": true,
        "elevator": false,
        "animals": true,
        "balcony": true,
        "garden": true,
        "kitchenware": false,
        "tv": false,
        "furnished": false,
        "premium": false,
        "location": {
            "lat": 41.309399000000006,
            "long": 19.840753
        },
        "wifi": false,
        "description": "Bungalow 3+1 te Xhamlliku",
        "landlord": "5eb9ba0b82034f267009e168"
    },
    {
        "img": [
            "https://i.ibb.co/sb5L8vZ/home22.jpg",
            "https://i.ibb.co/HXSDJWp/home6.jpg",
            "https://i.ibb.co/sb5L8vZ/home22.jpg",
            "https://i.ibb.co/Sc167GJ/home21.jpg"
        ],
        "price": 1417953,
        "adress": {
            "street": "deshmoret e kombit"
        },
        "area": 85,
        "rooms": 5,
        "type": "Bungalow",
        "water": false,
        "electricity": false,
        "enternet": true,
        "floor": 1,
        "condition": "Construction",
        "tolalFloors": 3,
        "bathrooms": 2,
        "bedrooms": 1,
        "tenants": 2,
        "parking": false,
        "air_conditioner": true,
        "elevator": true,
        "animals": false,
        "balcony": true,
        "garden": false,
        "kitchenware": true,
        "tv": true,
        "furnished": false,
        "premium": false,
        "location": {
            "lat": 41.33556,
            "long": 19.840032
        },
        "wifi": false,
        "description": "Bungalow 5+1 te Xhamlliku",
        "landlord": "5e9ce482c7c4404594c9719a"
    },
    {
        "img": [
            "https://i.ibb.co/Z24LxrY/home9.jpg",
            "https://i.ibb.co/HXSDJWp/home6.jpg",
            "https://i.ibb.co/XVtLk7F/home7.jpg",
            "https://i.ibb.co/k0v8T79/home15.jpg"
        ],
        "price": 483406,
        "adress": {
            "street": "qemal stava"
        },
        "area": 61,
        "rooms": 1,
        "type": "Bungalow",
        "water": false,
        "electricity": true,
        "enternet": true,
        "floor": 4,
        "condition": "Old",
        "tolalFloors": 4,
        "bathrooms": 2,
        "bedrooms": 2,
        "tenants": 3,
        "parking": true,
        "air_conditioner": true,
        "elevator": false,
        "animals": false,
        "balcony": true,
        "garden": false,
        "kitchenware": false,
        "tv": false,
        "furnished": false,
        "premium": true,
        "location": {
            "lat": 41.337074,
            "long": 19.83199
        },
        "wifi": true,
        "description": "Bungalow 1+1 te 9-katshet",
        "landlord": "5eb7cbb5cc77430017b4fecf"
    },
    {
        "img": [
            "https://i.ibb.co/0c25s2n/home29.jpg",
            "https://i.ibb.co/Sc167GJ/home21.jpg",
            "https://i.ibb.co/P4kK0Yd/home23.jpg",
            "https://i.ibb.co/9gzRq4x/home17.jpg"
        ],
        "price": 1443568,
        "adress": {
            "street": "qemal stava"
        },
        "area": 53,
        "rooms": 2,
        "type": "Studio",
        "water": true,
        "electricity": false,
        "enternet": false,
        "floor": 1,
        "condition": "New",
        "tolalFloors": 2,
        "bathrooms": 2,
        "bedrooms": 1,
        "tenants": 3,
        "parking": false,
        "air_conditioner": true,
        "elevator": true,
        "animals": true,
        "balcony": true,
        "garden": true,
        "kitchenware": false,
        "tv": true,
        "furnished": true,
        "premium": false,
        "location": {
            "lat": 41.305044,
            "long": 19.785148
        },
        "wifi": true,
        "description": "Studio 2+1 te 9-katshet",
        "landlord": "5eb7f836e2232e001764ddc0"
    },
    {
        "img": [
            "https://i.ibb.co/JHyjxrt/home24.jpg",
            "https://i.ibb.co/yYRHfXS/home16.jpg",
            "https://i.ibb.co/tLtPkRv/home2.jpg",
            "https://i.ibb.co/k0v8T79/home15.jpg"
        ],
        "price": 1293866,
        "adress": {
            "street": "bulevardi zhan d'ark"
        },
        "area": 56,
        "rooms": 5,
        "type": "Duplex",
        "water": false,
        "electricity": false,
        "enternet": true,
        "floor": 1,
        "condition": "New",
        "tolalFloors": 1,
        "bathrooms": 2,
        "bedrooms": 3,
        "tenants": 2,
        "parking": false,
        "air_conditioner": false,
        "elevator": false,
        "animals": false,
        "balcony": false,
        "garden": false,
        "kitchenware": false,
        "tv": true,
        "furnished": false,
        "premium": false,
        "location": {
            "lat": 41.317183,
            "long": 19.834121
        },
        "wifi": false,
        "description": "Duplex 5+1 te Brryli",
        "landlord": "5eb7f836e2232e001764ddc0"
    },
    {
        "img": [
            "https://i.ibb.co/yYSxgR8/home10.jpg",
            "https://i.ibb.co/Sc167GJ/home21.jpg",
            "https://i.ibb.co/7jphK8k/home4.jpg",
            "https://i.ibb.co/7W6BTwh/home25.jpg"
        ],
        "price": 413886,
        "adress": {
            "street": "endri keko"
        },
        "area": 56,
        "rooms": 1,
        "type": "Townhouse",
        "water": false,
        "electricity": false,
        "enternet": false,
        "floor": 1,
        "condition": "New",
        "tolalFloors": 2,
        "bathrooms": 2,
        "bedrooms": 3,
        "tenants": 1,
        "parking": true,
        "air_conditioner": true,
        "elevator": false,
        "animals": false,
        "balcony": false,
        "garden": true,
        "kitchenware": false,
        "tv": true,
        "furnished": false,
        "premium": true,
        "location": {
            "lat": 41.329435000000004,
            "long": 19.826269
        },
        "wifi": false,
        "description": "Townhouse 1+1 te Ali Demi",
        "landlord": "5eb7cbb5cc77430017b4fecf"
    },
    {
        "img": [
            "https://i.ibb.co/TYPS3tf/home11.jpg",
            "https://i.ibb.co/yYRHfXS/home16.jpg",
            "https://i.ibb.co/Z24LxrY/home9.jpg",
            "https://i.ibb.co/yYRHfXS/home16.jpg"
        ],
        "price": 1456419,
        "adress": {
            "street": "bulevardi zhan d'ark"
        },
        "area": 85,
        "rooms": 5,
        "type": "Dorm",
        "water": true,
        "electricity": true,
        "enternet": false,
        "floor": 3,
        "condition": "New",
        "tolalFloors": 4,
        "bathrooms": 2,
        "bedrooms": 1,
        "tenants": 3,
        "parking": false,
        "air_conditioner": true,
        "elevator": false,
        "animals": false,
        "balcony": false,
        "garden": true,
        "kitchenware": false,
        "tv": false,
        "furnished": true,
        "premium": false,
        "location": {
            "lat": 41.302871,
            "long": 19.793893
        },
        "wifi": true,
        "description": "Dorm 5+1 te 9-katshet",
        "landlord": "5eb9ba0b82034f267009e168"
    },
    {
        "img": [
            "https://i.ibb.co/10tcrsZ/home8.jpg",
            "https://i.ibb.co/q7XwJsj/home1.jpg",
            "https://i.ibb.co/XSmjg0V/home28.jpg",
            "https://i.ibb.co/3F26Rbb/home3.jpg"
        ],
        "price": 1065212,
        "adress": {
            "street": "ushtari i panjohur"
        },
        "area": 52,
        "rooms": 2,
        "type": "Dorm",
        "water": true,
        "electricity": false,
        "enternet": true,
        "floor": 1,
        "condition": "Construction",
        "tolalFloors": 3,
        "bathrooms": 1,
        "bedrooms": 2,
        "tenants": 2,
        "parking": true,
        "air_conditioner": true,
        "elevator": true,
        "animals": false,
        "balcony": true,
        "garden": true,
        "kitchenware": false,
        "tv": true,
        "furnished": false,
        "premium": true,
        "location": {
            "lat": 41.332394,
            "long": 19.806097
        },
        "wifi": true,
        "description": "Dorm 2+1 te Qytet Studenti",
        "landlord": "5ea2afe318d7ce0017423414"
    },
    {
        "img": [
            "https://i.ibb.co/HXSDJWp/home6.jpg",
            "https://i.ibb.co/yYRHfXS/home16.jpg",
            "https://i.ibb.co/Z24LxrY/home9.jpg",
            "https://i.ibb.co/JHyjxrt/home24.jpg"
        ],
        "price": 1603273,
        "adress": {
            "street": "endri keko"
        },
        "area": 73,
        "rooms": 4,
        "type": "Dorm",
        "water": false,
        "electricity": false,
        "enternet": true,
        "floor": 1,
        "condition": "Construction",
        "tolalFloors": 3,
        "bathrooms": 1,
        "bedrooms": 2,
        "tenants": 4,
        "parking": false,
        "air_conditioner": true,
        "elevator": true,
        "animals": false,
        "balcony": true,
        "garden": true,
        "kitchenware": false,
        "tv": true,
        "furnished": true,
        "premium": false,
        "location": {
            "lat": 41.359931,
            "long": 19.803429
        },
        "wifi": true,
        "description": "Dorm 4+1 te Oxhaku",
        "landlord": "5eb7cbb5cc77430017b4fecf"
    },
    {
        "img": [
            "https://i.ibb.co/HXSDJWp/home6.jpg",
            "https://i.ibb.co/Z24LxrY/home9.jpg",
            "https://i.ibb.co/yYRHfXS/home16.jpg",
            "https://i.ibb.co/XSmjg0V/home28.jpg"
        ],
        "price": 930057,
        "adress": {
            "street": "qemal stava"
        },
        "area": 93,
        "rooms": 5,
        "type": "Townhouse",
        "water": true,
        "electricity": false,
        "enternet": false,
        "floor": 1,
        "condition": "Construction",
        "tolalFloors": 4,
        "bathrooms": 2,
        "bedrooms": 1,
        "tenants": 1,
        "parking": false,
        "air_conditioner": false,
        "elevator": false,
        "animals": false,
        "balcony": true,
        "garden": true,
        "kitchenware": true,
        "tv": true,
        "furnished": true,
        "premium": false,
        "location": {
            "lat": 41.345819000000006,
            "long": 19.843707
        },
        "wifi": false,
        "description": "Townhouse 5+1 te Qytet Studenti",
        "landlord": "5e9ce482c7c4404594c9719a"
    },
    {
        "img": [
            "https://i.ibb.co/9gzRq4x/home17.jpg",
            "https://i.ibb.co/F8YR93k/home27.jpg",
            "https://i.ibb.co/P4kK0Yd/home23.jpg",
            "https://i.ibb.co/yYRHfXS/home16.jpg"
        ],
        "price": 554315,
        "adress": {
            "street": "bulevardi zhan d'ark"
        },
        "area": 99,
        "rooms": 3,
        "type": "Dorm",
        "water": true,
        "electricity": true,
        "enternet": false,
        "floor": 3,
        "condition": "New",
        "tolalFloors": 1,
        "bathrooms": 1,
        "bedrooms": 2,
        "tenants": 2,
        "parking": false,
        "air_conditioner": false,
        "elevator": false,
        "animals": true,
        "balcony": false,
        "garden": true,
        "kitchenware": false,
        "tv": false,
        "furnished": true,
        "premium": true,
        "location": {
            "lat": 41.340206,
            "long": 19.820541
        },
        "wifi": true,
        "description": "Dorm 3+1 te Brryli",
        "landlord": "5eb7cbb5cc77430017b4fecf"
    },
    {
        "img": [
            "https://i.ibb.co/F8YR93k/home27.jpg",
            "https://i.ibb.co/Wx2s6DP/home14.jpg",
            "https://i.ibb.co/yYRHfXS/home16.jpg",
            "https://i.ibb.co/10tcrsZ/home8.jpg"
        ],
        "price": 589668,
        "adress": {
            "street": "endri keko"
        },
        "area": 72,
        "rooms": 5,
        "type": "Townhouse",
        "water": true,
        "electricity": false,
        "enternet": true,
        "floor": 4,
        "condition": "Construction",
        "tolalFloors": 2,
        "bathrooms": 2,
        "bedrooms": 2,
        "tenants": 1,
        "parking": false,
        "air_conditioner": false,
        "elevator": false,
        "animals": false,
        "balcony": true,
        "garden": true,
        "kitchenware": true,
        "tv": false,
        "furnished": false,
        "premium": true,
        "location": {
            "lat": 41.313223,
            "long": 19.834782
        },
        "wifi": false,
        "description": "Townhouse 5+1 te Qytet Studenti",
        "landlord": "5eb7f836e2232e001764ddc0"
    },
    {
        "img": [
            "https://i.ibb.co/P4kK0Yd/home23.jpg",
            "https://i.ibb.co/XSmjg0V/home28.jpg",
            "https://i.ibb.co/HXSDJWp/home6.jpg",
            "https://i.ibb.co/XSmjg0V/home28.jpg"
        ],
        "price": 1481137,
        "adress": {
            "street": "ushtari i panjohur"
        },
        "area": 68,
        "rooms": 3,
        "type": "Apartment",
        "water": false,
        "electricity": false,
        "enternet": false,
        "floor": 4,
        "condition": "Construction",
        "tolalFloors": 2,
        "bathrooms": 2,
        "bedrooms": 2,
        "tenants": 2,
        "parking": true,
        "air_conditioner": true,
        "elevator": false,
        "animals": true,
        "balcony": true,
        "garden": false,
        "kitchenware": false,
        "tv": true,
        "furnished": true,
        "premium": false,
        "location": {
            "lat": 41.356816,
            "long": 19.838431
        },
        "wifi": false,
        "description": "Apartment 3+1 te 9-katshet",
        "landlord": "5eb9ba0b82034f267009e168"
    },
    {
        "img": [
            "https://i.ibb.co/P4kK0Yd/home23.jpg",
            "https://i.ibb.co/Wx2s6DP/home14.jpg",
            "https://i.ibb.co/XVtLk7F/home7.jpg",
            "https://i.ibb.co/tLtPkRv/home2.jpg"
        ],
        "price": 1721539,
        "adress": {
            "street": "arkitetkt sinani"
        },
        "area": 90,
        "rooms": 4,
        "type": "Townhouse",
        "water": true,
        "electricity": true,
        "enternet": true,
        "floor": 4,
        "condition": "New",
        "tolalFloors": 3,
        "bathrooms": 2,
        "bedrooms": 1,
        "tenants": 1,
        "parking": false,
        "air_conditioner": true,
        "elevator": true,
        "animals": true,
        "balcony": true,
        "garden": false,
        "kitchenware": false,
        "tv": true,
        "furnished": false,
        "premium": true,
        "location": {
            "lat": 41.291189,
            "long": 19.800348
        },
        "wifi": false,
        "description": "Townhouse 4+1 te Xhamlliku",
        "landlord": "5e9ce482c7c4404594c9719a"
    },
    {
        "img": [
            "https://i.ibb.co/Wx2s6DP/home14.jpg",
            "https://i.ibb.co/Z24LxrY/home9.jpg",
            "https://i.ibb.co/TYPS3tf/home11.jpg",
            "https://i.ibb.co/TYPS3tf/home11.jpg"
        ],
        "price": 595570,
        "adress": {
            "street": "deshmoret e kombit"
        },
        "area": 83,
        "rooms": 3,
        "type": "Studio",
        "water": true,
        "electricity": false,
        "enternet": true,
        "floor": 1,
        "condition": "Construction",
        "tolalFloors": 3,
        "bathrooms": 2,
        "bedrooms": 3,
        "tenants": 3,
        "parking": true,
        "air_conditioner": true,
        "elevator": true,
        "animals": false,
        "balcony": false,
        "garden": true,
        "kitchenware": true,
        "tv": false,
        "furnished": false,
        "premium": false,
        "location": {
            "lat": 41.300009,
            "long": 19.784583
        },
        "wifi": false,
        "description": "Studio 3+1 te Vorribomit",
        "landlord": "5eb7cbb5cc77430017b4fecf"
    },
    {
        "img": [
            "https://i.ibb.co/JHyjxrt/home24.jpg",
            "https://i.ibb.co/7W6BTwh/home25.jpg",
            "https://i.ibb.co/TYPS3tf/home11.jpg",
            "https://i.ibb.co/3F26Rbb/home3.jpg"
        ],
        "price": 872082,
        "adress": {
            "street": "ushtari i panjohur"
        },
        "area": 85,
        "rooms": 4,
        "type": "Townhouse",
        "water": false,
        "electricity": false,
        "enternet": true,
        "floor": 3,
        "condition": "Old",
        "tolalFloors": 3,
        "bathrooms": 1,
        "bedrooms": 1,
        "tenants": 2,
        "parking": true,
        "air_conditioner": false,
        "elevator": true,
        "animals": true,
        "balcony": false,
        "garden": true,
        "kitchenware": false,
        "tv": true,
        "furnished": false,
        "premium": true,
        "location": {
            "lat": 41.302296000000005,
            "long": 19.792537
        },
        "wifi": false,
        "description": "Townhouse 4+1 te Vasil Shanto",
        "landlord": "5eb7cbb5cc77430017b4fecf"
    },
    {
        "img": [
            "https://i.ibb.co/7W6BTwh/home25.jpg",
            "https://i.ibb.co/7W6BTwh/home25.jpg",
            "https://i.ibb.co/yYRHfXS/home16.jpg",
            "https://i.ibb.co/yYRHfXS/home16.jpg"
        ],
        "price": 1642005,
        "adress": {
            "street": "endri keko"
        },
        "area": 96,
        "rooms": 2,
        "type": "Townhouse",
        "water": false,
        "electricity": false,
        "enternet": true,
        "floor": 3,
        "condition": "Old",
        "tolalFloors": 1,
        "bathrooms": 2,
        "bedrooms": 1,
        "tenants": 1,
        "parking": true,
        "air_conditioner": false,
        "elevator": true,
        "animals": true,
        "balcony": false,
        "garden": false,
        "kitchenware": false,
        "tv": false,
        "furnished": true,
        "premium": false,
        "location": {
            "lat": 41.331926,
            "long": 19.828458
        },
        "wifi": false,
        "description": "Townhouse 2+1 te 15-katshi",
        "landlord": "5e9ce482c7c4404594c9719a"
    }
]
exports.postAllHomes = (req, res) => {

    allHomes.forEach((home)=>{
db.collection('homes').add(home).then((hdata)=>{
            return res.json('Homes added successfully.');
        }).catch((err) => {
            console.error(err);
              res.status(500).json({ error: 'Something went wrong...' });  
         });

});
};