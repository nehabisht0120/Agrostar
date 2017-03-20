(function() {
    angular.module('agrostar-app')
        .controller('agrostarCtrl', ['$scope', '$location', '$anchorScroll', '$route', '$mdDialog', 'agrostarService', function($scope, $location, $anchorScroll, $route, $mdDialog, agrostarService) {

            var vm = this;

            vm.getOffers = getOffers;
            vm.getOffersByFilter = getOffersByFilter;
            vm.addToCart = addToCart;

            vm.listOfOffers = {};
            vm.index = {};
            vm.cartProducts = [];

            init();

            function init() {
                getProducts();
                getFilters();
                getOffers();
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
                    .catch(function(data) {
                    });
            }
        }])
}());
