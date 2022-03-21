(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <footer class=\"footer\">\n    <div class=\"row align-items-center justify-content-xl-between\">\n      <div class=\"col-xl-6\">\n        <div class=\"copyright text-center text-xl-left text-muted\">\n          &copy; {{ test | date: \"yyyy\" }}\n          Hak cipta terpelihara \n          <a\n            href=\"http://www.mbpj.gov.my\"\n            class=\"font-weight-bold ml-1\"\n            target=\"_blank\"\n            >Majlis Bandaraya Petaling Jaya</a\n          >\n        </div>\n      </div>\n    </div>\n  </footer>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav\n  class=\"navbar navbar-top navbar-expand navbar-dark bg-info border-bottom\"\n  id=\"navbar-main\"\n>\n  <div class=\"container-fluid\">\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <!-- Search form -->\n      <!--<form\n        class=\"navbar-search navbar-search-light form-inline mr-sm-3\"\n        id=\"navbar-search-main\"\n      >\n        <div class=\"form-group mb-0\" [ngClass]=\"{ focused: focus === true }\">\n          <div class=\"input-group input-group-alternative input-group-merge\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\"\n                ><i class=\"fas fa-search\"></i\n              ></span>\n            </div>\n            <input\n              class=\"form-control\"\n              placeholder=\"Search\"\n              type=\"text\"\n              (focus)=\"focus = true\"\n              (blur)=\"focus = false\"\n            />\n          </div>\n        </div>\n        <button\n          type=\"button\"\n          class=\"close\"\n          (click)=\"closeSearch()\"\n          data-action=\"search-close\"\n          data-target=\"#navbar-search-main\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">×</span>\n        </button>\n      </form>-->\n      <!-- Navbar links -->\n      <ul class=\"navbar-nav align-items-center ml-md-auto\">\n        <li class=\"nav-item d-xl-none\">\n          <!-- Sidenav toggler -->\n          <div\n            class=\"pr-3 sidenav-toggler sidenav-toggler-dark\"\n            data-action=\"sidenav-pin\"\n            data-target=\"#sidenav-main\"\n            (click)=\"openSidebar()\"\n          >\n            <div class=\"sidenav-toggler-inner\">\n              <i class=\"sidenav-toggler-line\"></i>\n              <i class=\"sidenav-toggler-line\"></i>\n              <i class=\"sidenav-toggler-line\"></i>\n            </div>\n          </div>\n        </li>\n        <!-- <li class=\"nav-item d-sm-none\">\n          <a class=\"nav-link\">\n            <i class=\"ni ni-zoom-split-in\"></i>\n          </a>\n        </li> -->\n        <!-- <li class=\"nav-item dropdown\" dropdown placement=\"bottom-right\">\n          <a class=\"nav-link dropdown-toggle\" role=\"button\" dropdownToggle>\n            <i class=\"ni ni-bell-55\"></i>\n          </a>\n          <div\n            class=\"dropdown-menu dropdown-menu-xl dropdown-menu-right py-0 overflow-hidden\"\n            *dropdownMenu\n          >\n            <div class=\"px-3 py-3\">\n              <h6 class=\"text-sm text-muted m-0\">\n                You have <strong class=\"text-primary\">2</strong> notifications.\n              </h6>\n            </div>\n            <div class=\"list-group list-group-flush\">\n              <a\n                href=\"javascript:void()\"\n                class=\"list-group-item list-group-item-action\"\n              >\n                <div class=\"row align-items-center\">\n                  <div class=\"col-auto\">\n                    <img\n                      alt=\"Image placeholder\"\n                      src=\"assets/img/icons/common/faq.svg\"\n                      class=\"avatar rounded-circle\"\n                    />\n                  </div>\n                  <div class=\"col ml--2\">\n                    <div\n                      class=\"d-flex justify-content-between align-items-center\"\n                    >\n                      <div>\n                        <h4 class=\"mb-0 text-sm\">System</h4>\n                      </div>\n                      <div class=\"text-right text-muted\">\n                        <small>2 minutes ago</small>\n                      </div>\n                    </div>\n                    <p class=\"text-sm mb-0\">New application</p>\n                  </div>\n                </div>\n              </a>\n              <a\n                href=\"javascript:void()\"\n                class=\"list-group-item list-group-item-action\"\n              >\n                <div class=\"row align-items-center\">\n                  <div class=\"col-auto\">\n                    <img\n                      alt=\"Image placeholder\"\n                      src=\"assets/img/icons/common/faq.svg\"\n                      class=\"avatar rounded-circle\"\n                    />\n                  </div>\n                  <div class=\"col ml--2\">\n                    <div\n                      class=\"d-flex justify-content-between align-items-center\"\n                    >\n                      <div>\n                        <h4 class=\"mb-0 text-sm\">System</h4>\n                      </div>\n                      <div class=\"text-right text-muted\">\n                        <small>2 hrs ago</small>\n                      </div>\n                    </div>\n                    <p class=\"text-sm mb-0\">New application</p>\n                  </div>\n                </div>\n              </a>\n            </div>\n            <a\n              href=\"javascript:void()\"\n              class=\"dropdown-item text-center text-primary font-weight-bold py-3\"\n              >View all</a\n            >\n          </div>\n        </li> -->\n      </ul>\n      <!-- User -->\n      <ul class=\"navbar-nav align-items-center ml-auto ml-md-0\">\n        <li class=\"nav-item dropdown\" dropdown placement=\"bottom-right\">\n          <a class=\"nav-link pr-0 dropdown-toggle\" role=\"button\" dropdownToggle>\n            <div class=\"media align-items-center\">\n              <span class=\"avatar avatar-sm rounded-circle\">\n                <img\n                  alt=\"Image placeholder\"\n                  src=\"assets/img/icons/common/boss.svg\"\n                />\n              </span>\n              <div class=\"media-body ml-2 d-none d-lg-block\">\n                <span class=\"mb-0 text-sm font-weight-bold\">{{\n                  user?.full_name\n                }}</span>\n              </div>\n            </div>\n          </a>\n          <div\n            class=\"dropdown-menu dropdown-menu-arrow dropdown-menu-right\"\n            *dropdownMenu\n          >\n            <div class=\"dropdown-header noti-title\">\n              <h6 class=\"text-overflow m-0\">Welcome!</h6>\n            </div>\n            <a\n              routerLinkActive=\"active\"\n              [routerLink]=\"['/user-profile']\"\n              class=\"dropdown-item\"\n            >\n              <i class=\"far fa-id-card\"></i>\n              <span>My profile</span>\n            </a>\n            <div class=\"dropdown-divider\"></div>\n            <a\n              routerLinkActive=\"active\"\n              (click)=\"logout()\"\n              class=\"dropdown-item\"\n            >\n              <i class=\"fas fa-sign-out-alt\"></i>\n              <span>Logout</span>\n            </a>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div\n  *ngIf=\"sidenavOpen === true\"\n  class=\"backdrop d-xl-none\"\n  (click)=\"toggleSidenav()\"\n></div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/sidebar/sidebar.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav\n  class=\"sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-light bg-white\"\n  id=\"sidenav-main\"\n  (mouseover)=\"onMouseEnterSidenav()\"\n  (mouseout)=\"onMouseLeaveSidenav()\"\n>\n<perfect-scrollbar>\n  <div class=\"scrollbar-inner\">\n    <div class=\"sidenav-header d-flex align-items-center\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/#']\">\n        <img\n          src=\"assets/img/logo/logo-erebat.png\"\n          class=\"navbar-brand-img\"\n          alt=\"...\"\n        />\n      </a>\n      <div class=\"ml-auto\">\n        <!-- Sidenav toggler -->\n        <div\n          class=\"sidenav-toggler d-none d-xl-block\"\n          data-action=\"sidenav-unpin\"\n          data-target=\"#sidenav-main\"\n          (click)=\"minimizeSidebar()\"\n        >\n          <div class=\"sidenav-toggler-inner\">\n            <i class=\"sidenav-toggler-line\"></i>\n            <i class=\"sidenav-toggler-line\"></i>\n            <i class=\"sidenav-toggler-line\"></i>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"navbar-inner\">\n      <div class=\"collapse navbar-collapse\" id=\"sidenav-collapse-main\">\n        <!-- Collapse header -->\n        <ul class=\"navbar-nav\">\n          <li *ngFor=\"let menuitem of menuItems\" class=\"nav-item\">\n            <!--If is a single link-->\n            <a\n              routerLinkActive=\"active\"\n              [routerLink]=\"[menuitem.path]\"\n              *ngIf=\"menuitem.type === 'link'\"\n              class=\"nav-link\"\n            >\n              <i class=\"ni {{ menuitem.icontype }}\"></i>\n              <span class=\"nav-link-text\">{{ menuitem.title }}</span>\n            </a>\n            <!--If it have a submenu-->\n            <a\n              data-toggle=\"collapse\"\n              routerLinkActive=\"active\"\n              *ngIf=\"menuitem.type === 'sub'\"\n              (click)=\"menuitem.isCollapsed = !menuitem.isCollapsed\"\n              [attr.aria-expanded]=\"!menuitem.isCollapsed\"\n              [attr.aria-controls]=\"menuitem.collapse\"\n              class=\"nav-link\"\n            >\n              <i class=\"ni {{ menuitem.icontype }}\"></i>\n              <span class=\"nav-link-text\">{{ menuitem.title }}</span>\n            </a>\n\n            <!--Display the submenu items-->\n            <div\n              id=\"{{ menuitem.collapse }}\"\n              class=\"collapse\"\n              *ngIf=\"menuitem.type === 'sub'\"\n              [collapse]=\"menuitem.isCollapsed\"\n              [isAnimated]=\"true\"\n            >\n              <ul class=\"nav nav-sm flex-column\">\n                <li\n                  *ngFor=\"let childitems of menuitem.children\"\n                  class=\"nav-item\"\n                >\n                  <!--If is a single link-->\n                  <a\n                    routerLinkActive=\"active\"\n                    [routerLink]=\"[menuitem.path, childitems.path]\"\n                    class=\"nav-link\"\n                    *ngIf=\"childitems.type === 'link'\"\n                  >\n                    {{ childitems.title }}\n                  </a>\n                  <!--If it have a submenu-->\n                  <a\n                    data-toggle=\"collapse\"\n                    (click)=\"childitems.isCollapsed = !childitems.isCollapsed\"\n                    [attr.aria-expanded]=\"!childitems.isCollapsed\"\n                    [attr.aria-controls]=\"childitems.collapse\"\n                    *ngIf=\"childitems.type === 'sub'\"\n                    class=\"nav-link\"\n                  >\n                    {{ childitems.title }}\n                  </a>\n                  <!--Display the submenu items-->\n                  <div\n                    id=\"{{ childitems.collapse }}\"\n                    class=\"collapse\"\n                    *ngIf=\"childitems.type === 'sub'\"\n                    [collapse]=\"childitems.isCollapsed\"\n                    [isAnimated]=\"true\"\n                  >\n                    <ul class=\"nav\">\n                      <li\n                        *ngFor=\"let childitem of childitems.children\"\n                        class=\"nav-item\"\n                      >\n                        <a href=\"javascript:void(0)\" class=\"nav-link\">\n                          {{ childitem.title }}\n                        </a>\n                      </li>\n                    </ul>\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </li>\n        </ul>\n        <!-- Divider -->\n        <hr class=\"my-3\" />\n      </div>\n    </div>\n  </div>\n</perfect-scrollbar>\n\n</nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/vector-map/vector-map.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/vector-map/vector-map.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dx-vector-map\n  id=\"vector-map\"\n  [bounds]=\"[0, 0, 0, 0]\"\n  (onClick)=\"click($event)\"\n>\n  <dxo-tooltip [enabled]=\"true\" [customizeTooltip]=\"customizeTooltip\">\n    <dxo-font color=\"#fff\"></dxo-font>\n    <dxo-border [visible]=\"false\"></dxo-border>\n  </dxo-tooltip>\n  <dxi-layer [dataSource]=\"worldMap\" [customize]=\"customizeLayers\"> </dxi-layer>\n</dx-vector-map>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/examples/presentation/presentation.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/examples/presentation/presentation.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav\n  id=\"navbar-main\"\n  class=\"navbar navbar-horizontal navbar-main navbar-expand-lg navbar-dark bg-danger\"\n>\n  <div class=\"container\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/dashboards/dashboard']\">\n      <img src=\"assets/img/brand/white.png\" />\n    </a>\n    <button\n      class=\"navbar-toggler\"\n      type=\"button\"\n      data-toggle=\"collapse\"\n      data-target=\"#navbar-collapse\"\n      aria-expanded=\"false\"\n      aria-label=\"Toggle navigation\"\n      (click)=\"isCollapsed = !isCollapsed\"\n      [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseBasic\"\n    >\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div\n      class=\"navbar-collapse navbar-custom-collapse collapse\"\n      id=\"collapseBasic\" [collapse]=\"isCollapsed\"\n    >\n      <div class=\"navbar-collapse-header\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\">\n            <a [routerLink]=\"['/dashboards/dashboard']\">\n              <img src=\"assets/img/brand/blue.png\" />\n            </a>\n          </div>\n          <div class=\"col-6 collapse-close\">\n            <button\n              type=\"button\"\n              class=\"navbar-toggler\"\n              data-toggle=\"collapse\"\n              data-target=\"#navbar-collapse\"\n              aria-controls=\"navbar-collapse\"\n              aria-expanded=\"false\"\n              aria-label=\"Toggle navigation\"\n              (click)=\"isCollapsed = !isCollapsed\"\n            >\n              <span></span> <span></span>\n            </button>\n          </div>\n        </div>\n      </div>\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            routerLinkActive=\"active\"\n            [routerLink]=\"['/dashboards/dashboard']\"\n          >\n            <span class=\"nav-link-inner--text\">Dashboard</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            routerLinkActive=\"active\"\n            [routerLink]=\"['/examples/pricing']\"\n          >\n            <span class=\"nav-link-inner--text\">Pricing</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            routerLinkActive=\"active\"\n            [routerLink]=\"['/examples/login']\"\n          >\n            <span class=\"nav-link-inner--text\">Login</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            routerLinkActive=\"active\"\n            [routerLink]=\"['/examples/register']\"\n          >\n            <span class=\"nav-link-inner--text\">Register</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            routerLinkActive=\"active\"\n            [routerLink]=\"['/examples/lock']\"\n          >\n            <span class=\"nav-link-inner--text\">Lock</span>\n          </a>\n        </li>\n      </ul>\n      <hr class=\"d-lg-none\" />\n      <ul class=\"navbar-nav align-items-lg-center ml-lg-auto\">\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link nav-link-icon\"\n            href=\"https://www.facebook.com/creativetim\"\n            target=\"_blank\"\n            tooltip=\"Like us on Facebook\"\n          >\n            <i class=\"fab fa-facebook-square\"></i>\n            <span class=\"nav-link-inner--text d-lg-none\">Facebook</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link nav-link-icon\"\n            href=\"https://www.instagram.com/creativetimofficial\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Instagram\"\n          >\n            <i class=\"fab fa-instagram\"></i>\n            <span class=\"nav-link-inner--text d-lg-none\">Instagram</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link nav-link-icon\"\n            href=\"https://twitter.com/creativetim\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Twitter\"\n          >\n            <i class=\"fab fa-twitter-square\"></i>\n            <span class=\"nav-link-inner--text d-lg-none\">Twitter</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link nav-link-icon\"\n            href=\"https://github.com/creativetimofficial\"\n            target=\"_blank\"\n            tooltip=\"Star us on Github\"\n          >\n            <i class=\"fab fa-github\"></i>\n            <span class=\"nav-link-inner--text d-lg-none\">Github</span>\n          </a>\n        </li>\n        <li class=\"nav-item d-none d-lg-block ml-lg-4\">\n          <a\n            href=\"https://www.creative-tim.com/product/argon-dashboard-pro-angular?ref=adpa-presentation-page\"\n            target=\"_blank\"\n            class=\"btn btn-neutral btn-icon\"\n          >\n            <span class=\"btn-inner--icon\">\n              <i class=\"fas fa-shopping-cart mr-2\"></i>\n            </span>\n            <span class=\"nav-link-inner--text\">Purchase now</span>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"main-content\">\n  <!-- Header -->\n  <div class=\"header bg-danger pt-5 pb-7\">\n    <div class=\"container\">\n      <div class=\"header-body\">\n        <div class=\"row align-items-center\">\n          <div class=\"col-lg-6\">\n            <div class=\"pr-5\">\n              <h1 class=\"display-2 text-white font-weight-bold mb-0\">\n                Argon Dashboard PRO Angular\n              </h1>\n              <h2 class=\"display-4 text-white font-weight-light\">\n                A beautiful premium dashboard for Bootstrap 4 and Angular.\n              </h2>\n              <p class=\"text-white mt-4\">\n                Argon perfectly combines reusable HTML and modular CSS with a\n                modern styling and beautiful markup throughout each HTML\n                template in the pack.\n              </p>\n              <div class=\"mt-5\">\n                <a\n                  [routerLink]=\"['/dashboards/dashboard']\"\n                  class=\"btn btn-neutral my-2\"\n                  >Explore Dashboard</a\n                >\n                <a\n                  href=\"https://www.creative-tim.com/product/argon-dashboard-pro-angular?ref=adpa-presentation-page\"\n                  class=\"btn btn-default my-2\"\n                  >Purchase now</a\n                >\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-6\">\n            <div class=\"row pt-5\">\n              <div class=\"col-md-6\">\n                <div class=\"card\">\n                  <div class=\"card-body\">\n                    <div\n                      class=\"icon icon-shape bg-gradient-red text-white rounded-circle shadow mb-4\"\n                    >\n                      <i class=\"ni ni-active-40\"></i>\n                    </div>\n                    <h5 class=\"h3\">Components</h5>\n                    <p>Argon comes with over 70 handcrafted components.</p>\n                  </div>\n                </div>\n                <div class=\"card\">\n                  <div class=\"card-body\">\n                    <div\n                      class=\"icon icon-shape bg-gradient-info text-white rounded-circle shadow mb-4\"\n                    >\n                      <i class=\"ni ni-active-40\"></i>\n                    </div>\n                    <h5 class=\"h3\">Plugins</h5>\n                    <p>\n                      Fully integrated and extendable third-party plugins that\n                      you will love.\n                    </p>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-6 pt-lg-5 pt-4\">\n                <div class=\"card mb-4\">\n                  <div class=\"card-body\">\n                    <div\n                      class=\"icon icon-shape bg-gradient-success text-white rounded-circle shadow mb-4\"\n                    >\n                      <i class=\"ni ni-active-40\"></i>\n                    </div>\n                    <h5 class=\"h3\">Pages</h5>\n                    <p>\n                      From simple to complex, you get a beautiful set of 15+\n                      page examples.\n                    </p>\n                  </div>\n                </div>\n                <div class=\"card mb-4\">\n                  <div class=\"card-body\">\n                    <div\n                      class=\"icon icon-shape bg-gradient-warning text-white rounded-circle shadow mb-4\"\n                    >\n                      <i class=\"ni ni-active-40\"></i>\n                    </div>\n                    <h5 class=\"h3\">Documentation</h5>\n                    <p>You will love how easy is to to work with Argon.</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"separator separator-bottom separator-skew zindex-100\">\n      <svg\n        x=\"0\"\n        y=\"0\"\n        viewBox=\"0 0 2560 100\"\n        preserveAspectRatio=\"none\"\n        version=\"1.1\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\n      </svg>\n    </div>\n  </div>\n  <section class=\"py-6 pb-9 bg-default\">\n    <div class=\"container-fluid\">\n      <div class=\"row justify-content-center text-center\">\n        <div class=\"col-md-6\">\n          <h2 class=\"display-3 text-white\">A complete HTML solution</h2>\n          <p class=\"lead text-white\">\n            Argon is a completly new product built on our newest re-built from\n            scratch framework structure that is meant to make our products more\n            intuitive, more adaptive and, needless to say, so much easier to\n            customize. Let Argon amaze you with its cool features and build tools\n            and get your project to a whole new level.\n          </p>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"section section-lg pt-lg-0 mt--7\">\n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-12\">\n          <div class=\"row\">\n            <div class=\"col-lg-4\">\n              <div class=\"card card-lift--hover shadow border-0\">\n                <div class=\"card-body py-5\">\n                  <div\n                    class=\"icon icon-shape bg-gradient-primary text-white rounded-circle mb-4\"\n                  >\n                    <i class=\"ni ni-check-bold\"></i>\n                  </div>\n                  <h4 class=\"h3 text-primary text-uppercase\">\n                    Based on Bootstrap 4\n                  </h4>\n                  <p class=\"description mt-3\">\n                    Argon is built on top of the most popular open source\n                    toolkit for developing with HTML, CSS, and JS.\n                  </p>\n                  <div>\n                    <span class=\"badge badge-pill badge-primary mr-1\"\n                      >bootstrap 4</span\n                    >\n                    <span class=\"badge badge-pill badge-primary mr-1\"\n                      >dashboard</span\n                    >\n                    <span class=\"badge badge-pill badge-primary\">template</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-4\">\n              <div class=\"card card-lift--hover shadow border-0\">\n                <div class=\"card-body py-5\">\n                  <div\n                    class=\"icon icon-shape bg-gradient-success text-white rounded-circle mb-4\"\n                  >\n                    <i class=\"ni ni-istanbul\"></i>\n                  </div>\n                  <h4 class=\"h3 text-success text-uppercase\">\n                    Integrated build tools\n                  </h4>\n                  <p class=\"description mt-3\">\n                    Use Argons's included npm and gulp scripts to compile source\n                    code, run tests, and more with just a few simple commands.\n                  </p>\n                  <div>\n                    <span class=\"badge badge-pill badge-success mr-1\">npm</span>\n                    <span class=\"badge badge-pill badge-success mr-1\"\n                      >gulp</span\n                    >\n                    <span class=\"badge badge-pill badge-success\"\n                      >build tools</span\n                    >\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-4\">\n              <div class=\"card card-lift--hover shadow border-0\">\n                <div class=\"card-body py-5\">\n                  <div\n                    class=\"icon icon-shape bg-gradient-warning text-white rounded-circle mb-4\"\n                  >\n                    <i class=\"ni ni-planet\"></i>\n                  </div>\n                  <h4 class=\"h3 text-warning text-uppercase\">\n                    Full Sass support\n                  </h4>\n                  <p class=\"description mt-3\">\n                    Argon makes customization easier than ever before. You get\n                    all the tools to make your website building process a\n                    breeze.\n                  </p>\n                  <div>\n                    <span class=\"badge badge-pill badge-warning mr-1\"\n                      >sass</span\n                    >\n                    <span class=\"badge badge-pill badge-warning mr-1\"\n                      >design</span\n                    >\n                    <span class=\"badge badge-pill badge-warning\"\n                      >customize</span\n                    >\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"py-6\">\n    <div class=\"container\">\n      <div class=\"row row-grid align-items-center\">\n        <div class=\"col-md-6 order-md-2\">\n          <img src=\"assets/img/theme/landing-1.png\" class=\"img-fluid\" />\n        </div>\n        <div class=\"col-md-6 order-md-1\">\n          <div class=\"pr-md-5\">\n            <h1>Awesome features</h1>\n            <p>\n              This dashboard comes with super cool features that are meant to\n              help in the process. Handcrafted components, page examples and\n              functional widgets are just a few things you will see and love at\n              first sight.\n            </p>\n            <ul class=\"list-unstyled mt-5\">\n              <li class=\"py-2\">\n                <div class=\"d-flex align-items-center\">\n                  <div>\n                    <div class=\"badge badge-circle badge-success mr-3\">\n                      <i class=\"ni ni-settings-gear-65\"></i>\n                    </div>\n                  </div>\n                  <div><h4 class=\"mb-0\">Carefully crafted components</h4></div>\n                </div>\n              </li>\n              <li class=\"py-2\">\n                <div class=\"d-flex align-items-center\">\n                  <div>\n                    <div class=\"badge badge-circle badge-success mr-3\">\n                      <i class=\"ni ni-html5\"></i>\n                    </div>\n                  </div>\n                  <div><h4 class=\"mb-0\">Amazing page examples</h4></div>\n                </div>\n              </li>\n              <li class=\"py-2\">\n                <div class=\"d-flex align-items-center\">\n                  <div>\n                    <div class=\"badge badge-circle badge-success mr-3\">\n                      <i class=\"ni ni-satisfied\"></i>\n                    </div>\n                  </div>\n                  <div><h4 class=\"mb-0\">Super friendly support team</h4></div>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"py-6\">\n    <div class=\"container\">\n      <div class=\"row row-grid align-items-center\">\n        <div class=\"col-md-6\">\n          <img src=\"assets/img/theme/landing-2.png\" class=\"img-fluid\" />\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"pr-md-5\">\n            <h1>Example pages</h1>\n            <p>\n              If you want to get inspiration or just show something directly to\n              your clients, you can jump start your development with our\n              pre-built example pages.\n            </p>\n            <a\n              [routerLink]=\"['/examples/profile']\"\n              class=\"font-weight-bold text-warning mt-5\"\n              >Explore pages</a\n            >\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"py-6\">\n    <div class=\"container\">\n      <div class=\"row row-grid align-items-center\">\n        <div class=\"col-md-6 order-md-2\">\n          <img src=\"assets/img/theme/landing-3.png\" class=\"img-fluid\" />\n        </div>\n        <div class=\"col-md-6 order-md-1\">\n          <div class=\"pr-md-5\">\n            <h1>Lovable widgets and cards</h1>\n            <p>\n              We love cards and everybody on the web seems to. We have gone\n              above and beyond with options for you to organise your\n              information. From cards designed for content, to pricing cards or\n              user profiles, you will have many options to choose from.\n            </p>\n            <a\n              [routerLink]=\"['/widgets']\"\n              class=\"font-weight-bold text-info mt-5\"\n              >Explore widgets</a\n            >\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"py-7 section-nucleo-icons bg-white overflow-hidden\">\n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-8 text-center\">\n          <h2 class=\"display-3\">Nucleo Icons</h2>\n          <p class=\"lead\">\n            The official package contains over 21.000 icons which are looking\n            great in combination with Argon Design System. Make sure you check\n            all of them and use those that you like the most.\n          </p>\n          <div class=\"btn-wrapper\">\n            <a\n              [routerLink]=\"['/documentation/icons']\"\n              target=\"_blank\"\n              class=\"btn btn-primary\"\n              >View demo icons</a\n            >\n            <a\n              href=\"https://nucleoapp.com/?ref=1712\"\n              target=\"_blank\"\n              class=\"btn btn-default mt-3 mt-md-0\"\n              >View all icons</a\n            >\n          </div>\n        </div>\n      </div>\n      <div class=\"blur--hover\">\n        <a [routerLink]=\"['/documentation/icons']\">\n          <div class=\"icons-container blur-item mt-5\">\n            <!-- Center -->\n            <i class=\"icon ni ni-diamond\"></i>\n            <!-- Right 1 -->\n            <i class=\"icon icon-sm ni ni-album-2\"></i>\n            <i class=\"icon icon-sm ni ni-app\"></i>\n            <i class=\"icon icon-sm ni ni-atom\"></i>\n            <!-- Right 2 -->\n            <i class=\"icon ni ni-bag-17\"></i>\n            <i class=\"icon ni ni-bell-55\"></i>\n            <i class=\"icon ni ni-credit-card\"></i>\n            <!-- Left 1 -->\n            <i class=\"icon icon-sm ni ni-briefcase-24\"></i>\n            <i class=\"icon icon-sm ni ni-building\"></i>\n            <i class=\"icon icon-sm ni ni-button-play\"></i>\n            <!-- Left 2 -->\n            <i class=\"icon ni ni-calendar-grid-58\"></i>\n            <i class=\"icon ni ni-camera-compact\"></i>\n            <i class=\"icon ni ni-chart-bar-32\"></i>\n          </div>\n          <span class=\"blur-hidden h5 text-success\"\n            >Explore all the 21.000+ Nucleo Icons</span\n          >\n        </a>\n      </div>\n    </div>\n  </section>\n  <section class=\"py-7\">\n    <div class=\"container\">\n      <div class=\"row row-grid justify-content-center\">\n        <div class=\"col-lg-8 text-center\">\n          <h2 class=\"display-3\">\n            Do you love this awesome\n            <span class=\"text-success\">Dashboard for Bootstrap 4?</span>\n          </h2>\n          <p class=\"lead\">\n            Cause if you do, it can be yours now. Hit the button below to\n            navigate to get the free version or purchase a license for your next\n            project. Build a new web app or give an old Bootstrap project a new\n            look!\n          </p>\n          <div class=\"btn-wrapper\">\n            <a\n              href=\"https://www.creative-tim.com/product/argon-dashboard-angular?ref=adpa-presentation-page\"\n              class=\"btn btn-neutral mb-3 mb-sm-0\"\n              target=\"_blank\"\n            >\n              <span class=\"btn-inner--text\">Get FREE version</span>\n            </a>\n            <a\n              href=\"https://www.creative-tim.com/product/argon-dashboard-pro-angular?ref=adpa-presentation-page\"\n              class=\"btn btn-primary btn-icon mb-3 mb-sm-0\"\n            >\n              <span class=\"btn-inner--icon\"><i class=\"ni ni-basket\"></i></span>\n              <span class=\"btn-inner--text\">Purchase now</span>\n              <span\n                class=\"badge badge-md badge-pill badge-floating badge-danger border-white\"\n                >$89</span\n              >\n            </a>\n          </div>\n          <div class=\"text-center\">\n            <h4 class=\"display-4 mb-5 mt-5\">Available on these technologies</h4>\n            <div class=\"row justify-content-center\">\n              <div class=\"my-2 col-3 col-md-2\">\n                <a\n                  href=\" https://www.creative-tim.com/product/argon-dashboard-pro-angular?ref=adpa-presentation-page\"\n                  target=\"_blank\"\n                  tooltip=\"Angular - One framework. Mobile &amp; desktop\"\n                >\n                  <img\n                    src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg\"\n                    class=\"img-fluid rounded-circle\"\n                  />\n                </a>\n              </div>\n              <div class=\"my-2 col-3 col-md-2\">\n                <a\n                  href=\"https://www.creative-tim.com/product/argon-dashboard-pro?ref=adpa-presentation-page\"\n                  target=\"_blank\"\n                  tooltip=\"Bootstrap 4 - Most popular front-end component library\"\n                >\n                  <img\n                    src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/bootstrap.jpg\"\n                    class=\"img-fluid rounded-circle shadow shadow-lg--hover\"\n                  />\n                </a>\n              </div>\n\n              <div class=\"my-2 col-3 col-md-2\">\n                <a\n                  href=\" https://www.creative-tim.com/product/argon-dashboard-pro-react?ref=adpa-presentation-page\"\n                  target=\"_blank\"\n                  tooltip=\"React - A JavaScript library for building user interfaces\"\n                >\n                  <img\n                    src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg\"\n                    class=\"img-fluid rounded-circle\"\n                  />\n                </a>\n              </div>\n              <div class=\"my-2 col-3 col-md-2\">\n                <a\n                  href=\" https://www.creative-tim.com/product/argon-dashboard-pro-laravel?ref=adpa-presentation-page\"\n                  target=\"_blank\"\n                  tooltip=\"Laravel - The PHP Framework For Web Artisans\"\n                >\n                  <img\n                    src=\"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/laravel_logo.png\"\n                    class=\"img-fluid rounded-circle\"\n                  />\n                </a>\n              </div>\n              <div class=\"my-2 col-3 col-md-2\">\n                <a\n                  href=\" https://www.creative-tim.com/product/argon-dashboard-pro-nodejs?ref=adpa-presentation-page\"\n                  target=\"_blank\"\n                  tooltip=\"Node.js - a JavaScript runtime built on Chrome's V8 JavaScript engine\"\n                >\n                  <img\n                    src=\"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nodejs-logo.jpg\"\n                    class=\"img-fluid rounded-circle\"\n                  />\n                </a>\n              </div>\n              <div class=\"my-2 col-3 col-md-2\">\n                <a\n                  href=\" https://www.creative-tim.com/product/vue-argon-dashboard-pro?ref=adpa-presentation-page\"\n                  target=\"_blank\"\n                  tooltip=\"Vue.js - The progressive javascript framework\"\n                >\n                  <img\n                    src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg\"\n                    class=\"img-fluid rounded-circle\"\n                  />\n                </a>\n              </div>\n              <div class=\"my-2 col-3 col-md-2\">\n                <a\n                  href=\" https://www.creative-tim.com/product/argon-dashboard-pro-angular?ref=adpa-presentation-page\"\n                  target=\"_blank\"\n                  tooltip=\"Sketch - Digital design toolkit\"\n                >\n                  <img\n                    src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg\"\n                    class=\"img-fluid rounded-circle\"\n                  />\n                </a>\n              </div>\n              <div class=\"my-2 col-3 col-md-2\">\n                <a\n                  href=\" https://www.adobe.com/products/photoshop.html?ref=adpa-presentation-page\"\n                  target=\"_blank\"\n                  tooltip=\"[Coming Soon] Adobe Photoshop - Software for digital images manipulation\"\n                >\n                  <img\n                    src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/ps.jpg\"\n                    class=\"img-fluid rounded-circle opacity-3\"\n                  />\n                </a>\n              </div>\n            </div>\n            <div class=\"spinner-border\" role=\"status\">\n              <span class=\"sr-only\">Loading...</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>\n<!-- Footer -->\n<footer class=\"py-5\" id=\"footer-main\">\n  <div class=\"container\">\n    <div class=\"row align-items-center justify-content-xl-between\">\n      <div class=\"col-xl-6\">\n        <div class=\"copyright text-center text-xl-left text-muted\">\n          &copy; {{ test | date: \"yyyy\" }}\n          <a\n            href=\"https://www.creative-tim.com?ref=adpa-presentation-page\"\n            class=\"font-weight-bold ml-1\"\n            target=\"_blank\"\n            >Creative Tim</a\n          >\n        </div>\n      </div>\n      <div class=\"col-xl-6\">\n        <ul\n          class=\"nav nav-footer justify-content-center justify-content-xl-end\"\n        >\n          <li class=\"nav-item\">\n            <a\n              href=\"https://www.creative-tim.com?ref=adpa-presentation-page\"\n              class=\"nav-link\"\n              target=\"_blank\"\n              >Creative Tim</a\n            >\n          </li>\n          <li class=\"nav-item\">\n            <a\n              href=\"https://www.creative-tim.com/presentation?ref=adpa-presentation-page\"\n              class=\"nav-link\"\n              target=\"_blank\"\n              >About Us</a\n            >\n          </li>\n          <li class=\"nav-item\">\n            <a\n              href=\"http://blog.creative-tim.com?ref=adpa-presentation-page\"\n              class=\"nav-link\"\n              target=\"_blank\"\n              >Blog</a\n            >\n          </li>\n          <li class=\"nav-item\">\n            <a\n              href=\"https://www.creative-tim.com/license?ref=adpa-presentation-page\"\n              class=\"nav-link\"\n              target=\"_blank\"\n              >License</a\n            >\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/admin-layout/admin-layout.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Sidenav -->\n<div class=\"\" (window:resize)=\"isMobile($event)\">\n  <app-sidebar\n    [ngClass]=\"{ 'sidenav fixed-left': isMobileResolution === false }\"\n  ></app-sidebar>\n  <div class=\"main-content\">\n    <!-- Top navbar -->\n    <app-navbar></app-navbar>\n    <!-- Pages -->\n    <router-outlet></router-outlet>\n    <app-footer></app-footer>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/auth-layout/auth-layout.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/auth-layout/auth-layout.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/auth.module": [
		"./src/app/auth/auth.module.ts",
		"common",
		"auth-auth-module"
	],
	"./core/admin/admin.module": [
		"./src/app/core/admin/admin.module.ts",
		"core-admin-admin-module"
	],
	"./core/user/user.module": [
		"./src/app/core/user/user.module.ts",
		"common",
		"core-user-user-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ "./src/app/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var _examples_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/presentation/presentation.component */ "./src/app/examples/presentation/presentation.component.ts");
/* harmony import */ var _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/guard/auth.guard */ "./src/app/shared/guard/auth.guard.ts");









var routes = [
    {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full'
    },
    {
        path: 'presentation',
        component: _examples_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_7__["PresentationComponent"]
    },
    {
        path: '',
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__["AdminLayoutComponent"],
        children: [
            {
                path: '',
                loadChildren: './core/user/user.module#UserModule',
                canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
                data: {
                    role: 'AD'
                }
            },
            {
                path: 'admin',
                loadChildren: './core/admin/admin.module#AdminModule'
            }
        ]
    },
    {
        path: '',
        component: _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_6__["AuthLayoutComponent"],
        children: [
            {
                path: 'auth',
                loadChildren: './auth/auth.module#AuthModule'
            },
        ]
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                    useHash: true
                })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(router, authService) {
        var _this = this;
        this.router = router;
        this.authService = authService;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                // Show loading indicator
                window.scrollTo(0, 0);
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                // Hide loading indicator
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
                // Hide loading indicator
                // Present error to user
                console.log(event.error);
            }
        });
        setInterval(function () {
            if (authService.tokenAccess) {
                console.log('Test refresh token');
                authService.refreshToken();
            }
            else {
                _this.router.navigate(['/auth/login']);
                console.log('No token');
            }
        }, 900000);
    }
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_interceptor_http_token_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/interceptor/http.token.interceptor */ "./src/app/shared/interceptor/http.token.interceptor.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/fesm5/ngx-chips.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/fesm5/ngx-bootstrap-collapse.js");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "./node_modules/@asymmetrik/ngx-leaflet/dist/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ "./src/app/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var _examples_presentation_presentation_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./examples/presentation/presentation.module */ "./src/app/examples/presentation/presentation.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_18__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsDropdownModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_17__["AppRoutingModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot({
                    closeButton: true,
                    timeOut: 3000,
                    progressBar: true,
                    positionClass: 'toast-top-right'
                }),
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_10__["CollapseModule"].forRoot(),
                ngx_chips__WEBPACK_IMPORTED_MODULE_9__["TagInputModule"],
                _examples_presentation_presentation_module__WEBPACK_IMPORTED_MODULE_16__["PresentationModule"],
                _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_11__["LeafletModule"].forRoot(),
                ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_14__["AdminLayoutComponent"],
                _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_15__["AuthLayoutComponent"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _shared_interceptor_http_token_interceptor__WEBPACK_IMPORTED_MODULE_5__["HttpTokenInterceptor"], multi: true
                }
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _vector_map_vector_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vector-map/vector-map.component */ "./src/app/components/vector-map/vector-map.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/fesm5/ngx-bootstrap-collapse.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");





var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};








var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_9__["CollapseModule"].forRoot(),
                devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxVectorMapModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_11__["BsDropdownModule"].forRoot()
            ],
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _vector_map_vector_map_component__WEBPACK_IMPORTED_MODULE_7__["VectorMapComponent1"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]
            ],
            exports: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _vector_map_vector_map_component__WEBPACK_IMPORTED_MODULE_7__["VectorMapComponent1"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]
            ],
            providers: [
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-footer",
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_menu_menu_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/menu/menu-items */ "./src/app/shared/menu/menu-items.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var src_app_shared_handler_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/handler/jwt/jwt.service */ "./src/app/shared/handler/jwt/jwt.service.ts");








var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, authService, jwtService, element, router, toastr) {
        var _this = this;
        this.authService = authService;
        this.jwtService = jwtService;
        this.element = element;
        this.router = router;
        this.toastr = toastr;
        this.sidenavOpen = true;
        this.location = location;
        this.user = this.authService.decodedToken();
        // this.user = this.authService.userDetail
        // console.log('User: ', this.user)
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                // Show loading indicator
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                // Hide loading indicator
                if (window.innerWidth < 1200) {
                    document.body.classList.remove("g-sidenav-pinned");
                    document.body.classList.add("g-sidenav-hidden");
                    _this.sidenavOpen = false;
                }
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationError"]) {
                // Hide loading indicator
                // Present error to user
                console.log(event.error);
            }
        });
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = _shared_menu_menu_items__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].filter(function (listTitle) { return listTitle; });
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === "#") {
            titlee = titlee.slice(1);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return "Dashboard";
    };
    NavbarComponent.prototype.openSidebar = function () {
        if (document.body.classList.contains("g-sidenav-pinned")) {
            document.body.classList.remove("g-sidenav-pinned");
            document.body.classList.add("g-sidenav-hidden");
            this.sidenavOpen = false;
        }
        else {
            document.body.classList.add("g-sidenav-pinned");
            document.body.classList.remove("g-sidenav-hidden");
            this.sidenavOpen = true;
        }
    };
    NavbarComponent.prototype.toggleSidenav = function () {
        if (document.body.classList.contains("g-sidenav-pinned")) {
            document.body.classList.remove("g-sidenav-pinned");
            document.body.classList.add("g-sidenav-hidden");
            this.sidenavOpen = false;
        }
        else {
            document.body.classList.add("g-sidenav-pinned");
            document.body.classList.remove("g-sidenav-hidden");
            this.sidenavOpen = true;
        }
    };
    NavbarComponent.prototype.logout = function () {
        this.jwtService.destroyToken();
        this.router.navigate(['/auth/login']);
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: src_app_shared_handler_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_7__["JwtService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
    ]; };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-navbar",
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            src_app_shared_handler_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_7__["JwtService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_menu_menu_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/menu/menu-items */ "./src/app/shared/menu/menu-items.ts");




var misc = {
    sidebar_mini_active: true
};
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router) {
        this.router = router;
        this.isCollapsed = true;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuItems = _shared_menu_menu_items__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].filter(function (menuItem) { return menuItem; });
        this.router.events.subscribe(function (event) {
            _this.isCollapsed = true;
        });
    };
    SidebarComponent.prototype.onMouseEnterSidenav = function () {
        if (!document.body.classList.contains("g-sidenav-pinned")) {
            document.body.classList.add("g-sidenav-show");
        }
    };
    SidebarComponent.prototype.onMouseLeaveSidenav = function () {
        if (!document.body.classList.contains("g-sidenav-pinned")) {
            document.body.classList.remove("g-sidenav-show");
        }
    };
    SidebarComponent.prototype.minimizeSidebar = function () {
        var sidenavToggler = document.getElementsByClassName("sidenav-toggler")[0];
        var body = document.getElementsByTagName("body")[0];
        if (body.classList.contains("g-sidenav-pinned")) {
            misc.sidebar_mini_active = true;
        }
        else {
            misc.sidebar_mini_active = false;
        }
        if (misc.sidebar_mini_active === true) {
            body.classList.remove("g-sidenav-pinned");
            body.classList.add("g-sidenav-hidden");
            sidenavToggler.classList.remove("active");
            misc.sidebar_mini_active = false;
        }
        else {
            body.classList.add("g-sidenav-pinned");
            body.classList.remove("g-sidenav-hidden");
            sidenavToggler.classList.add("active");
            misc.sidebar_mini_active = true;
        }
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-sidebar",
            template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/components/sidebar/sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/components/vector-map/vector-map.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/vector-map/vector-map.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep #vector-map {\n    min-height: 220px;\n    width: 100%;\n    display: block;\n}\n::ng-deep #vector-map > svg > rect{\n  display: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92ZWN0b3ItbWFwL3ZlY3Rvci1tYXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsY0FBYztBQUNsQjtBQUNBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy92ZWN0b3ItbWFwL3ZlY3Rvci1tYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAjdmVjdG9yLW1hcCB7XG4gICAgbWluLWhlaWdodDogMjIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG46Om5nLWRlZXAgI3ZlY3Rvci1tYXAgPiBzdmcgPiByZWN0e1xuICBkaXNwbGF5OiBub25lO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/vector-map/vector-map.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/vector-map/vector-map.component.ts ***!
  \***************************************************************/
/*! exports provided: VectorMapComponent1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VectorMapComponent1", function() { return VectorMapComponent1; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var devextreme_dist_js_vectormap_data_world_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme/dist/js/vectormap-data/world.js */ "./node_modules/devextreme/dist/js/vectormap-data/world.js");
/* harmony import */ var devextreme_dist_js_vectormap_data_world_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_dist_js_vectormap_data_world_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vector_map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vector-map.service */ "./src/app/components/vector-map/vector-map.service.ts");




var VectorMapComponent1 = /** @class */ (function () {
    function VectorMapComponent1(service) {
        this.worldMap = devextreme_dist_js_vectormap_data_world_js__WEBPACK_IMPORTED_MODULE_2__["world"];
        this.countries = service.getCountries();
        this.customizeTooltip = this.customizeTooltip.bind(this);
        this.customizeLayers = this.customizeLayers.bind(this);
        this.click = this.click.bind(this);
    }
    VectorMapComponent1.prototype.customizeTooltip = function (arg) {
        var name = arg.attribute("name");
        return {
            text: name,
            color: "#FFFFFF",
            fontColor: "#000"
        };
    };
    VectorMapComponent1.prototype.customizeLayers = function (elements) {
        var _this = this;
        elements.forEach(function (element) {
            var country = _this.countries[element.attribute("name")];
            if (country) {
                element.applySettings({
                    color: country.color,
                    hoveredColor: country.color,
                    selectedColor: country.color
                });
            }
            else {
                element.applySettings({
                    color: "#e4e4e4",
                    hoveredColor: "#e4e4e4",
                    selectedColor: "#e4e4e4"
                });
            }
        });
    };
    VectorMapComponent1.prototype.click = function (e) {
        var target = e.target;
        if (target && this.countries[target.attribute("name")]) {
            target.selected(!target.selected());
        }
    };
    VectorMapComponent1.ctorParameters = function () { return [
        { type: _vector_map_service__WEBPACK_IMPORTED_MODULE_3__["Service"] }
    ]; };
    VectorMapComponent1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-vector-map-component",
            template: __webpack_require__(/*! raw-loader!./vector-map.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/vector-map/vector-map.component.html"),
            providers: [_vector_map_service__WEBPACK_IMPORTED_MODULE_3__["Service"]],
            styles: [__webpack_require__(/*! ./vector-map.component.css */ "./src/app/components/vector-map/vector-map.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_vector_map_service__WEBPACK_IMPORTED_MODULE_3__["Service"]])
    ], VectorMapComponent1);
    return VectorMapComponent1;
}());



/***/ }),

/***/ "./src/app/components/vector-map/vector-map.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/vector-map/vector-map.service.ts ***!
  \*************************************************************/
/*! exports provided: Country, Countries, Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Country", function() { return Country; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Countries", function() { return Countries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/index.js");



var popScale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"])()
    .domain([100, 3000])
    .range(["#AAAAAA", "#444444"]);
var Country = /** @class */ (function () {
    function Country() {
    }
    return Country;
}());

var Countries = /** @class */ (function () {
    function Countries() {
    }
    return Countries;
}());

var countries = {
    Russia: { color: popScale(300) },
    Canada: { color: popScale(120) },
    China: { color: popScale(1300) },
    "United States": { color: popScale(2920) },
    Brazil: { color: popScale(550) },
    Australia: { color: popScale(760) },
    India: { color: popScale(200) },
    Argentina: { color: popScale(240) },
    Romania: { color: popScale(600) },
    Algeria: { color: popScale(540) }
};
var Service = /** @class */ (function () {
    function Service() {
    }
    Service.prototype.getCountries = function () {
        return countries;
    };
    Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Service);
    return Service;
}());



/***/ }),

/***/ "./src/app/examples/presentation/presentation.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/examples/presentation/presentation.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn .badge-floating.badge:not(.badge-circle) {\n  transform: translate(-30%, 50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waXBlbGluZS1kZXYvcGlwZWxpbmUtd29yay9lcmVtYmF0L2JrcC9zaWMtMDAxLW1icGotZ2hnLXdlYi9zcmMvYXBwL2V4YW1wbGVzL3ByZXNlbnRhdGlvbi9wcmVzZW50YXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2V4YW1wbGVzL3ByZXNlbnRhdGlvbi9wcmVzZW50YXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUk7RUFDRSwrQkFBQTtBQ0xOIiwiZmlsZSI6InNyYy9hcHAvZXhhbXBsZXMvcHJlc2VudGF0aW9uL3ByZXNlbnRhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vXG4vLyBCYWRnZSBmbG9hdGluZ1xuLy9cblxuLmJ0biB7XG4gIC5iYWRnZS1mbG9hdGluZyB7XG4gICAgJi5iYWRnZTpub3QoLmJhZGdlLWNpcmNsZSkge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTMwJSwgNTAlKTtcbiAgICB9XG4gIH1cbn1cbiIsIi5idG4gLmJhZGdlLWZsb2F0aW5nLmJhZGdlOm5vdCguYmFkZ2UtY2lyY2xlKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zMCUsIDUwJSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/examples/presentation/presentation.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/examples/presentation/presentation.component.ts ***!
  \*****************************************************************/
/*! exports provided: PresentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationComponent", function() { return PresentationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PresentationComponent = /** @class */ (function () {
    function PresentationComponent() {
        this.test = new Date();
        this.isCollapsed = true;
    }
    PresentationComponent.prototype.ngOnInit = function () { };
    PresentationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-presentation",
            template: __webpack_require__(/*! raw-loader!./presentation.component.html */ "./node_modules/raw-loader/index.js!./src/app/examples/presentation/presentation.component.html"),
            styles: [__webpack_require__(/*! ./presentation.component.scss */ "./src/app/examples/presentation/presentation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PresentationComponent);
    return PresentationComponent;
}());



/***/ }),

/***/ "./src/app/examples/presentation/presentation.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/examples/presentation/presentation.module.ts ***!
  \**************************************************************/
/*! exports provided: PresentationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationModule", function() { return PresentationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/fesm5/ngx-bootstrap-collapse.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _presentation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./presentation.component */ "./src/app/examples/presentation/presentation.component.ts");








var PresentationModule = /** @class */ (function () {
    function PresentationModule() {
    }
    PresentationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_presentation_component__WEBPACK_IMPORTED_MODULE_7__["PresentationComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"].forRoot(), ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(), ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_5__["CollapseModule"].forRoot()]
        })
    ], PresentationModule);
    return PresentationModule;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent() {
        if (window.innerWidth < 1200) {
            this.isMobileResolution = true;
        }
        else {
            this.isMobileResolution = false;
        }
    }
    AdminLayoutComponent.prototype.isMobile = function (event) {
        if (window.innerWidth < 1200) {
            this.isMobileResolution = true;
        }
        else {
            this.isMobileResolution = false;
        }
    };
    AdminLayoutComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:resize", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AdminLayoutComponent.prototype, "isMobile", null);
    AdminLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-admin-layout",
            template: __webpack_require__(/*! raw-loader!./admin-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/admin-layout/admin-layout.component.html"),
            styles: [__webpack_require__(/*! ./admin-layout.component.scss */ "./src/app/layouts/admin-layout/admin-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYXV0aC1sYXlvdXQvYXV0aC1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.component.ts ***!
  \**************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent(router) {
        this.router = router;
        this.test = new Date();
        this.isCollapsed = true;
    }
    AuthLayoutComponent.prototype.ngOnInit = function () {
        // var html = document.getElementsByTagName("html")[0];
        // html.classList.add("auth-layout");
        // var body = document.getElementsByTagName("body")[0];
        // body.classList.add("bg-default");
        // var navbar = document.getElementsByClassName("navbar-horizontal")[0];
        // navbar.classList.add("navbar-light");
        // navbar.classList.add("navbar-transparent");
    };
    AuthLayoutComponent.prototype.ngOnDestroy = function () {
        // var html = document.getElementsByTagName("html")[0];
        // html.classList.remove("auth-layout");
        // var body = document.getElementsByTagName("body")[0];
        // body.classList.remove("bg-default");
        // var navbar = document.getElementsByClassName("navbar-horizontal")[0];
        // navbar.classList.remove("navbar-light");
        // navbar.classList.remove("navbar-transparent");
    };
    AuthLayoutComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-auth-layout",
            template: __webpack_require__(/*! raw-loader!./auth-layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/auth-layout/auth-layout.component.html"),
            styles: [__webpack_require__(/*! ./auth-layout.component.scss */ "./src/app/layouts/auth-layout/auth-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/guard/auth.guard.ts":
/*!********************************************!*\
  !*** ./src/app/shared/guard/auth.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    AuthGuard.prototype.canActivate = function (route) {
        var expectedRole = route.data.role;
        this.auth.decodedToken();
        if (this.auth.userType == expectedRole) {
            return true;
        }
        else {
            return this.router.navigate(['/auth/login']);
        }
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/handler/jwt/jwt.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/handler/jwt/jwt.service.ts ***!
  \***************************************************/
/*! exports provided: JwtService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtService", function() { return JwtService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JwtService = /** @class */ (function () {
    function JwtService() {
    }
    JwtService.prototype.getToken = function (title) {
        return window.localStorage[title];
    };
    JwtService.prototype.saveToken = function (title, token) {
        window.localStorage[title] = token;
    };
    JwtService.prototype.destroyToken = function () {
        window.localStorage.clear();
    };
    JwtService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], JwtService);
    return JwtService;
}());



/***/ }),

/***/ "./src/app/shared/handler/notify/notify.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/handler/notify/notify.service.ts ***!
  \*********************************************************/
/*! exports provided: NotifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyService", function() { return NotifyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");



var NotifyService = /** @class */ (function () {
    function NotifyService(toastr) {
        this.toastr = toastr;
    }
    NotifyService.prototype.openToastrConnection = function () {
        var status = 'Error';
        var statusText = 'No connection';
        this.toastr.info(statusText, status);
    };
    NotifyService.prototype.openToastrHttp = function (status, statusText) {
        this.toastr.warning(statusText, status);
    };
    NotifyService.prototype.openToastr = function (status, statusText) {
        this.toastr.success(statusText, status);
    };
    NotifyService.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
    ]; };
    NotifyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], NotifyService);
    return NotifyService;
}());



/***/ }),

/***/ "./src/app/shared/interceptor/http.token.interceptor.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/interceptor/http.token.interceptor.ts ***!
  \**************************************************************/
/*! exports provided: HttpTokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpTokenInterceptor", function() { return HttpTokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _handler_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../handler/jwt/jwt.service */ "./src/app/shared/handler/jwt/jwt.service.ts");
/* harmony import */ var _handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../handler/notify/notify.service */ "./src/app/shared/handler/notify/notify.service.ts");







var HttpTokenInterceptor = /** @class */ (function () {
    function HttpTokenInterceptor(handlerNotification, jwtService) {
        this.handlerNotification = handlerNotification;
        this.jwtService = jwtService;
    }
    HttpTokenInterceptor.prototype.handleError = function (error) {
        var data = {};
        data = {
            reason: error && error.error.reason ? error.error.reason : '',
            status: error.status
        };
        if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
            // Server or connection error happened
            if (!navigator.onLine) {
                // Handle offline error
                this.handlerNotification.openToastrConnection();
            }
            else {
                // Handle Http Error (error.status === 403, 404...)
                this.handlerNotification.openToastrHttp(error.status, error.statusText);
            }
        }
        else {
            // Handle Client Error (Angular Error, ReferenceError...)     
        }
        console.error('It happens: ', error);
        // console.log('Error: ', error)
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    };
    HttpTokenInterceptor.prototype.intercept = function (req, next) {
        var headersConfig = {
            'Content-Type': 'application/json',
            'Accept': '*/*'
        };
        var token = this.jwtService.getToken('accessToken');
        if (token) {
            headersConfig['Authorization'] = "Bearer " + token;
            // console.log(headersConfig)
        }
        // console.log('Intercepting...')
        var request = req.clone({ setHeaders: headersConfig });
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                // console.log('Event: ', event);
            }
            return event;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError.bind(this)));
    };
    HttpTokenInterceptor.ctorParameters = function () { return [
        { type: _handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_6__["NotifyService"] },
        { type: _handler_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_5__["JwtService"] }
    ]; };
    HttpTokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_6__["NotifyService"],
            _handler_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_5__["JwtService"]])
    ], HttpTokenInterceptor);
    return HttpTokenInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/menu/menu-items.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/menu/menu-items.ts ***!
  \*******************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
//Menu Items
var ROUTES = [
    {
        path: "/dashboard",
        title: "Dashboard",
        type: "link",
        icontype: "fas fa-desktop text-info",
    },
    {
        path: "/applications",
        title: "Applications",
        type: "link",
        icontype: "fas fa-file-alt text-info",
    },
    {
        path: "/rebates",
        title: "Rebates",
        type: "link",
        icontype: "fas fa-file-contract text-info",
    },
    {
        path: "/houses",
        title: "Houses",
        type: "link",
        icontype: "fas fa-home text-info",
    },
    {
        path: "/assessment-taxes",
        title: "Assessment Tax",
        type: "link",
        icontype: "fas fa-percent text-info",
    },
    {
        path: "/carbon-emission-factors",
        title: "Carbon Emission Factor",
        type: "link",
        icontype: "fas fa-times text-info",
    },
    {
        path: "/helpdesk",
        title: "Helpdesk",
        type: "link",
        icontype: "fas fa-life-ring text-info",
    },
    {
        path: "/report",
        title: "Reporting",
        type: "link",
        icontype: "fas fa-chart-bar text-info",
    },
    {
        path: "/management",
        title: "Management",
        type: "sub",
        icontype: "fas fa-tasks text-info",
        collapse: "management",
        isCollapsed: true,
        children: [
            { path: "users", title: "Users", type: "link" },
            { path: "faqs", title: "FAQ", type: "link" },
            { path: "audit", title: "Audit Trail", type: "link" },
            { path: "advertisement", title: "Advertisement", type: "link" },
        ],
    },
];


/***/ }),

/***/ "./src/app/shared/services/auth/auth.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/auth/auth.service.ts ***!
  \******************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _handler_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../handler/jwt/jwt.service */ "./src/app/shared/handler/jwt/jwt.service.ts");







var AuthService = /** @class */ (function () {
    function AuthService(jwtService, http) {
        this.jwtService = jwtService;
        this.http = http;
        // URL
        this.urlRegister = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "auth/registration/";
        this.urlPasswordChange = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "auth/password/change/";
        this.urlPasswordReset = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "auth/password/reset";
        this.urlTokenObtain = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "auth/obtain/";
        this.urlTokenRefresh = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "auth/refresh/";
        this.urlTokenVerify = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "auth/verify/";
        this.urlUser = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/users/";
        this.urlChangePassword = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'auth/change_password/';
        this.retrievedUsers = [];
    }
    AuthService.prototype.register = function (body) {
        return this.http.post(this.urlRegister, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {
            // console.log("Registration: ", res);
        }));
    };
    AuthService.prototype.changePassword = function (body) {
        return this.http.post(this.urlPasswordChange, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {
            // console.log("Change password: ", res);
        }));
    };
    AuthService.prototype.resetPassword = function (body) {
        return this.http.post(this.urlPasswordReset, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {
            // console.log("Reset password: ", res);
        }));
    };
    AuthService.prototype.obtainToken = function (body) {
        var _this = this;
        var jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();
        return this.http.post(this.urlTokenObtain, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {
            _this.token = res;
            _this.tokenRefresh = res.refresh;
            _this.tokenAccess = res.access;
            var decodedToken = jwtHelper.decodeToken(_this.tokenAccess);
            _this.full_name = decodedToken.full_name;
            _this.email = decodedToken.email;
            _this.username = decodedToken.username;
            _this.userID = decodedToken.user_id;
            _this.userType = decodedToken.user_type;
            // console.log('Decoded token: ', decodedToken)
            // console.log('Post response: ', res)
            // console.log('Refresh token', this.tokenRefresh)
            // console.log('Access token', this.tokenAccess)
            // console.log('Token: ', this.token)
            // console.log('Email: ', this.email)
            // console.log('Username: ', this.username)
            // console.log('User ID: ', this.userID)
            // console.log('User type: ', this.userType)
            _this.jwtService.saveToken("accessToken", _this.tokenAccess);
            _this.jwtService.saveToken("refreshToken", _this.tokenRefresh);
        }));
    };
    AuthService.prototype.refreshToken = function () {
        var refreshToken = this.jwtService.getToken("refreshToken");
        var body = {
            refresh: refreshToken,
        };
        return this.http.post(this.urlTokenRefresh, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {
            // console.log("Token refresh: ", res);
        }));
    };
    AuthService.prototype.verifyToken = function (body) {
        return this.http.post(this.urlTokenVerify, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {
            // console.log("Token verify: ", res);
        }));
    };
    AuthService.prototype.getUserDetail = function () {
        var _this = this;
        var selfInformationUrl = this.urlUser + this.userID + "/";
        return this.http.get(selfInformationUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {
            _this.userDetail = res;
            // console.log('User detail', this.userDetail)
        }));
    };
    AuthService.prototype.decodedToken = function () {
        var accessToken = localStorage.getItem("accessToken");
        var jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();
        var decodedToken = jwtHelper.decodeToken(accessToken);
        this.full_name = decodedToken.full_name;
        this.email = decodedToken.email;
        this.username = decodedToken.username;
        this.userID = decodedToken.user_id;
        this.userType = decodedToken.user_type;
        var user_obj = {
            user_id: decodedToken.user_id,
            username: decodedToken.username,
            full_name: decodedToken.full_name,
            email: decodedToken.email,
            user_type: decodedToken.user_type,
        };
        return user_obj;
    };
    /*
    refreshToken() {
      let headers = this.createHeader()
      let refreshBody = {
        refresh: this.retrievedTokenRefresh
      }
      return this.http.post<any>(this.authTokenRefreshUrl, refreshBody, {headers: headers}).subscribe(
        (res) => {
          this.retrievedToken = res
          console.log('Refresh token response: ', res)
        },
        (err) => {
          console.log('Refresh token error: ', err)
        },
        () => {
          this.refreshToken().unsubscribe()
        }
      )
    }
    */
    AuthService.prototype.changePasswordUser = function (body, id) {
        var urlChangePassword = this.urlChangePassword + id + '/';
        return this.http.put(urlChangePassword, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {
            // console.log('Filter user: ', res)
        }));
    };
    AuthService.ctorParameters = function () { return [
        { type: _handler_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_6__["JwtService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_handler_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_6__["JwtService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: 'https://ghg-api.mbpj.gov.my/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/*!

=========================================================
* Argon Dashboard PRO Angular - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-angular
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/pipeline-dev/pipeline-work/erembat/bkp/sic-001-mbpj-ghg-web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map