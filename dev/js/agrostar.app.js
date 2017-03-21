(function(){
    angular.module('agrostar-app',['ngRoute','ngMaterial']);	
}());
(function(){
	angular.module('agrostar-app')
	.config(['$routeProvider', function($routeProvider){
	$routeProvider
    .when("/", {
        templateUrl : "partials/home_page.html"
    })
}])
}());
(function() {
    angular.module('agrostar-app')
        .service('agrostarService', ['$http', '$q', function($http, $q) {

            this.getProducts = getProducts;
            this.product_data = {
                "status": true,
                "responseData": {
                    "productGists": [{
                        "skuCode": "AGS-CN-004",
                        "productImages": [{
                            "type": "thumb",
                            "name": "http://android.agrostar.in/static/AGS-CN-004_l.jpg"
                        }],
                        "priceOnApp": true,
                        "mrp": 500,
                        "productName": "Power Gel - Plant Nutrient (500 Ml)",
                        "inventory": 97,
                        "sellingPrice": 325
                    }, {
                        "skuCode": "AGS-CN-019",
                        "productImages": [{
                            "type": "thumb",
                            "name": "http://android.agrostar.in/static/AGS-CN-019_l.jpg"
                        }],
                        "priceOnApp": true,
                        "mrp": 495,
                        "productName": "Super Sero (1 Kg)",
                        "inventory": 0,
                        "sellingPrice": 300
                    }, {
                        "skuCode": "AGS-CN-022",
                        "productImages": [{
                            "type": "thumb",
                            "name": "http://android.agrostar.in/static/AGS-CN-022_l.jpg"
                        }],
                        "priceOnApp": true,
                        "mrp": 500,
                        "productName": "Kala Sona (250 Gms)",
                        "inventory": 0,
                        "sellingPrice": 175
                    }, {
                        "skuCode": "AGS-CN-025",
                        "productImages": [{
                            "type": "thumb",
                            "name": "http://android.agrostar.in/static/AGS-CN-025_l.jpg"
                        }],
                        "priceOnApp": true,
                        "mrp": 700,
                        "productName": "Black Gold (500 Gms)",
                        "inventory": 0,
                        "sellingPrice": 350
                    }, {
                        "skuCode": "AGS-CN-029",
                        "productImages": [{
                            "type": "thumb",
                            "name": "http://android.agrostar.in/static/AGS-CN-029_l.jpg"
                        }],
                        "priceOnApp": true,
                        "mrp": 400,
                        "productName": "Kala Moti (1 Kg)",
                        "inventory": 0,
                        "sellingPrice": 300
                    }, {
                        "skuCode": "AGS-CN-030",
                        "productImages": [{
                            "type": "thumb",
                            "name": "http://android.agrostar.in/static/AGS-CN-030_l.jpg"
                        }],
                        "priceOnApp": true,
                        "mrp": 350,
                        "productName": "Super Sona (250 Gms)",
                        "inventory": 0,
                        "sellingPrice": 310
                    }, {
                        "skuCode": "AGS-CN-031",
                        "productImages": [{
                            "type": "thumb",
                            "name": "http://android.agrostar.in/static/AGS-CN-031_l.jpg"
                        }],
                        "priceOnApp": true,
                        "mrp": 550,
                        "productName": "BT special Advance powder (500 Gms)",
                        "inventory": 837,
                        "sellingPrice": 350
                    }, {
                        "skuCode": "AGS-CN-032",
                        "productImages": [{
                            "type": "thumb",
                            "name": "http://android.agrostar.in/static/AGS-CN-032_l.jpg"
                        }],
                        "priceOnApp": true,
                        "mrp": 300,
                        "productName": "Big Power (250 Gms)",
                        "inventory": 0,
                        "sellingPrice": 300
                    }, {
                        "skuCode": "AGS-CN-035",
                        "productImages": [{
                            "type": "thumb",
                            "name": "http://android.agrostar.in/static/AGS-CN-035_l.jpg"
                        }],
                        "priceOnApp": true,
                        "mrp": 350,
                        "productName": "Humic power Advanced powder 95% (250 Gms)",
                        "inventory": 0,
                        "sellingPrice": 300
                    }, {
                        "skuCode": "AGS-CN-038",
                        "productImages": [{
                            "type": "thumb",
                            "name": "http://android.agrostar.in/static/AGS-CN-038_l.jpg"
                        }],
                        "priceOnApp": true,
                        "mrp": 642,
                        "productName": "Agsil (250 ml)",
                        "inventory": 0,
                        "sellingPrice": 463
                    }]
                },
                "message": ""
            }

            this.offers = {
                "status": true,
                "responseData": [{
                    "offerType": "GENERAL",
                    "validTo": 1480530599000,
                    "enabled": true,
                    "offerId": "df459ec7-854e-464c-bfc0-15ccf9565c0c",
                    "offerSources": [
                        "AGROSTAR"
                    ],
                    "offerDescription": "kala sona free on 2 quantities of super sero",
                    "maxNoOfUsages": "UNLIMITED",
                    "validFrom": 1479061801000,
                    "freeProducts": {
                        "entitlementType": "freeProducts",
                        "description": "kala sona free on 2 quantities of super sero",
                        "value": [{
                            "quantity": 1,
                            "skuCode": "AGS-CN-044"
                        }]
                    },
                    "offerName": "Buy 2 super sero get one kala sona free",
                    "constraints": {}
                }, {
                    "directCashback": {
                        "entitlementType": "directCashback",
                        "description": "10rs cashback",
                        "value": 10
                    },
                    "offerType": "GENERAL",
                    "validTo": 1479752999000,
                    "enabled": true,
                    "offerId": "54a3762a-ca80-4fff-b7fd-3e81cc461b1b",
                    "offerSources": [
                        "AGROSTAR"
                    ],
                    "offerDescription": "10rs cashback",
                    "maxNoOfUsages": "UNLIMITED",
                    "validFrom": 1479061801000,
                    "offerName": "10rs cashback",
                    "constraints": {}
                }, {
                    "offerType": "GENERAL",
                    "percentDiscount": {
                        "entitlementType": "percentDiscount",
                        "description": "20% off",
                        "value": 20
                    },
                    "validTo": 1479666599000,
                    "enabled": true,
                    "offerId": "4cba1607-9df4-473f-92e4-098ed362b30a",
                    "offerSources": [
                        "AGROSTAR"
                    ],
                    "offerDescription": "20% off on Power gel",
                    "maxNoOfUsages": "UNLIMITED",
                    "validFrom": 1479061801000,
                    "offerName": "20% off",
                    "constraints": {}
                }],
                "message": "OK"
            }

            this.product_offer = {
                "status": true,
                "responseData": [{
                    "defaultOffer": "df459ec7-854e-464c-bfc0-15ccf9565c0c",
                    "productOffers": [{
                        "offers": [
                            "df459ec7-854e-464c-bfc0-15ccf9565c0c",
                            "54a3762a-ca80-4fff-b7fd-3e81cc461b1b"
                        ],
                        "quantity": 1
                    }],
                    "skuCode": "AGS-CN-019"
                }, {
                    "defaultOffer": "54a3762a-ca80-4fff-b7fd-3e81cc461b1b",
                    "productOffers": [{
                        "offers": [
                            "54a3762a-ca80-4fff-b7fd-3e81cc461b1b",
                            "4cba1607-9df4-473f-92e4-098ed362b30a"
                        ],
                        "quantity": 1
                    }],
                    "skuCode": "AGS-CN-004"
                }],
                "message": "OK"
            }

            this.filters = {
                "status": true,
                "responseData": [{
                    "type": "ALLCATEGORIES",
                    "name": "ALL CATEGORIES",
                    "filters": [{
                        "offers": [
                            "df459ec7-854e-464c-bfc0-15ccf9565c0c"
                        ],
                        "label": "Product on Product Offer"
                    }, {
                        "offers": [
                            "4cba1607-9df4-473f-92e4-098ed362b30a",
                            "54a3762a-ca80-4fff-b7fd-3e81cc461b1b",
                            "df459ec7-854e-464c-bfc0-15ccf9565c0c"
                        ],
                        "label": "APP Offers"
                    }]
                }, {
                    "type": "CASHDISCOUNT",
                    "name": "Price Discounts",
                    "filters": []
                }, {
                    "type": "PERCENTDISCOUNT",
                    "name": "Discount in Percentage",
                    "filters": [{
                        "offers": [
                            "4cba1607-9df4-473f-92e4-098ed362b30a"
                        ],
                        "label": "10% OFF or MORE"
                    }]
                }, {
                    "type": "DIRECTCASHBACK",
                    "name": "Cash Back",
                    "filters": [{
                        "offers": [
                            "54a3762a-ca80-4fff-b7fd-3e81cc461b1b"
                        ],
                        "label": "Under 200"
                    }]
                }, {
                    "type": "PERCENTCASHBACK",
                    "name": "Cashback in Percentage",
                    "filters": []
                }],
                "message": "OK"
            }

            function getProducts() {

                var deferred = $q.defer();

                $http({
                    url: "//www.mocky.io/v2/582988a9120000750e8a26d0",
                    method: "GET",
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                    }
                }).then(function(data) {
                    deferred.resolve(data);
                });

                return deferred.promise;
            }

            function handleSuccess(response) {
                truceFactory.load_flag = false;
                return (response.data);
            };

            function handleFailure(response) {
                return $q.reject(response.data);
            }

        }])
}());

(function() {
    angular.module('agrostar-app')
        .controller('agrostarCtrl', ['$scope', '$location', '$anchorScroll', '$route', '$mdDialog', 'agrostarService', function($scope, $location, $anchorScroll, $route, $mdDialog, agrostarService) {

            var vm = this;

            vm.getOffers = getOffers;
            vm.getOffersByFilter = getOffersByFilter;
            vm.addToCart = addToCart;
            vm.getProducts = getProducts;
            vm.showSections = showSections;

            vm.listOfOffers = {};
            vm.index = {};
            vm.cartProducts = [];
            vm.active_section = {};
            vm.active_section[1] = true;
            vm.farmerProfile = {
            	'user_name': 'John Doe',
            	'business_name': 'John Enterprises',
            	'contact_number': 0089765434,
            	'email': 'johndoe@john.com',
            	'about_us': "I am agri product supplier"
            }

            init();

            function init() {
                getFilters();
                getOffers();
                getProducts();
            }

            function showSections(index) {
                for (var i = 0; i < 3; i++) {
                    if (i == index) {
                        vm.active_section[i] = true;

                    } else {
                        vm.active_section[i] = false;

                    }
                }

            }

            function addToCart(cart_product) {
                vm.cartProducts.push(cart_product);
                console.log(vm.cartProducts);
            }

            function getFilters() {
                vm.all_fliters = agrostarService.filters.responseData;
            }

            function getOffers() {
                vm.offers = agrostarService.offers.responseData;
            }

            function getOffersByFilter(offerId) {
                for (var i = 0; i < vm.offers.length; i++) {
                    if (vm.offers[i].offerId == offerId) {
                        vm.listOfOffers[offerId] = vm.offers[i];
                    }
                }

            }

            function getProducts() {
                vm.product_data = agrostarService.product_data.responseData.productGists;
                agrostarService.getProducts()
                    .then(function(data) {
                        console.log(data);
                    })
                    .catch(function(data) {});
            }
        }])
}());
