import {it, describe, expect, beforeEach} from 'angular2/testing';
import {SimpleComponent} from "../app/simple.component";

describe('Simple Component Test', () => {
    let component: SimpleComponent;

    beforeEach(() => {
        component = new SimpleComponent();
    });

    it('should be defined', () => {
        expect(component).toBeDefined();
    });
    
    it('should be an instance of "SimpleComponent"', () => {
        expect(component).toBeAnInstanceOf(SimpleComponent);
    });
});

describe('Simple Component Length Test', () => {
    let component: SimpleComponent;

    beforeEach(() => {
        component = new SimpleComponent();
    });

    it('Initial name should be 4 characters long', () => {

        expect(component.name.length).toBe(4);
    });
});

describe('Simple Component Name Test', () => {
    let component: SimpleComponent;

    beforeEach(() => {
        component = new SimpleComponent();
    });

    it('Initial input value should be \'here\'', () => {

        expect(component.name).toEqual('here');
    });
});
