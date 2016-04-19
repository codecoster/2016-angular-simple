import {describe, it, expect, injectAsync, TestComponentBuilder} from "angular2/testing"
import {SimpleComponent} from "../app/simple.component"

/**
 * In these test suites, a compiled component (with DOM access) is created via the TestComponentBuilder.
 * It can asynchronously create the specified component, which is then be injected and used for testing.
 */
describe("Test Initialization of Component", () => {

    it("should have 'here' as initial input value ",
        injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            return tcb
                .createAsync(SimpleComponent)
                .then((fixture) => {
                    fixture.detectChanges();

                    let compiled: Element = fixture.debugElement.nativeElement;
                    expect(compiled.getElementsByTagName("input")[0].value)
                        .toContain('here');
                });
        })
    );

    it("should have a button",
        injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            return tcb
                .createAsync(SimpleComponent)
                .then((fixture) => {
                    fixture.detectChanges();

                    let compiled: Element = fixture.debugElement.nativeElement;

                    expect(compiled.getElementsByTagName("button")[0])
                        .not.toBe(undefined);
                    expect(compiled.getElementsByTagName("button")[0].innerHTML)
                        .toContain('toggle');
                })
        })
    );
});

describe("Test Button Clicking functionality", () => {

    it("should toggle the output",
        injectAsync(
            [TestComponentBuilder],
            (tcb: TestComponentBuilder) => {
                return tcb
                    .createAsync(SimpleComponent)
                    .then((fixture) => {
                        fixture.detectChanges();

                        let compiled: Element = fixture.debugElement.nativeElement;
                        compiled.getElementsByTagName("button")[0].click();

                        fixture.detectChanges();
                        expect(
                            compiled.getElementsByTagName("label")[0].hidden
                        ).toBe(true);
                    })
            })
    );
});