var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Inject } from '@angular/core';
var ProblemListComponent = (function () {
    function ProblemListComponent(data, input) {
        this.data = data;
        this.input = input;
        this.problems = [];
        this.birthday = new Date();
        this.money = 25;
        this.Apr = 0.21;
        this.searchTerm = '';
    }
    ProblemListComponent.prototype.ngOnInit = function () {
        this.getProblems();
        this.getSearchTerm();
    };
    ProblemListComponent.prototype.getProblems = function () {
        var _this = this;
        this.subscriptionProblems = this.data.getProblems()
            .subscribe(function (problems) { return _this.problems = problems; });
    };
    ProblemListComponent.prototype.getSearchTerm = function () {
        var _this = this;
        this.subscriptionInput = this.input.getInput()
            .subscribe(function (inputTerm) { return _this.searchTerm = inputTerm; });
    };
    return ProblemListComponent;
}());
ProblemListComponent = __decorate([
    Component({
        selector: 'app-problem-list',
        templateUrl: './problem-list.component.html',
        styleUrls: ['./problem-list.component.css']
    }),
    __param(0, Inject("data")),
    __param(1, Inject("input")),
    __metadata("design:paramtypes", [Object, Object])
], ProblemListComponent);
export { ProblemListComponent };
//# sourceMappingURL=../../../../../src/app/components/problem-list/problem-list.component.js.map