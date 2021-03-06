var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var SearchkitManager_1 = require("../SearchkitManager");
var Searcher_1 = require("../Searcher");
var block = require('bem-cn');
var SearchkitComponent = (function (_super) {
    __extends(SearchkitComponent, _super);
    function SearchkitComponent() {
        _super.apply(this, arguments);
    }
    SearchkitComponent.prototype.defineBEMBlocks = function () {
        return null;
    };
    SearchkitComponent.prototype.defineAccessor = function () {
        return null;
    };
    SearchkitComponent.prototype.shouldCreateNewSearcher = function () {
        return false;
    };
    SearchkitComponent.prototype.translate = function (key) {
        return this.searchkit.translate(key);
    };
    SearchkitComponent.prototype.componentWillMount = function () {
        var _this = this;
        this.searchkit = this.context["searchkit"];
        this.accessor = this.defineAccessor();
        this.bemBlocks = _.transform(this.defineBEMBlocks(), function (result, cssClass, name) {
            result[name] = block(cssClass);
        });
        // if(!this.shouldCreateNewSearcher() || !this.searchkit.multipleSearchers){
        this.searcher = (this.searcher || this.props["searcher"] ||
            this.context["searcher"] || this.searchkit.primarySearcher);
        if (this.accessor) {
            // this.searcher.stateManager.registerAccessor(this.accessor)
            if (this.shouldCreateNewSearcher() && this.searchkit.multipleSearchers) {
                this.searcher = this.searchkit.createSearcher();
            }
            this.searcher.addAccessor(this.accessor);
        }
        if (this.searcher) {
            this.stateListenerUnsubscribe = this.searcher.emitter.addListener(function () {
                _this.forceUpdate();
            });
        }
    };
    SearchkitComponent.prototype.isInitialLoading = function () {
        return this.searcher && this.searcher.initialLoading;
    };
    SearchkitComponent.prototype.isLoading = function () {
        return this.searcher && this.searcher.loading;
    };
    SearchkitComponent.prototype.getError = function () {
        return this.searcher && this.searcher.error;
    };
    SearchkitComponent.prototype.componentWillUnmount = function () {
        if (this.stateListenerUnsubscribe) {
            this.stateListenerUnsubscribe();
        }
    };
    SearchkitComponent.contextTypes = {
        searchkit: React.PropTypes.instanceOf(SearchkitManager_1.SearchkitManager),
        searcher: React.PropTypes.instanceOf(Searcher_1.Searcher)
    };
    return SearchkitComponent;
})(React.Component);
exports.SearchkitComponent = SearchkitComponent;
//# sourceMappingURL=SearchkitComponent.js.map