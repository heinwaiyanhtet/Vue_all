import LoginForm from '@/components/LoginForm.vue'
import { mount } from '@vue/test-utils'

describe('LoginForm', () => {
    it('emits an event with user data payload', () => {
        const wrapper = mount(LoginForm)
        const input = wrapper.find('input[type="text"]') // Find text input

        input.setValue('Adam Jahr') // Set value for text input
        wrapper.trigger('submit') // Simulate form submission

        // Assert event has been emitted
        const formSubmittedCalls = wrapper.emitted('formSubmitted')
        expect(formSubmittedCalls).toHaveLength(1)

        // Assert payload is correct
        const expectedPayload = { name: 'Adam Jahr' }
        expect(wrapper.emitted('formSubmitted')[0][0]).toMatchObject(
            expectedPayload
        )
    })
})

// import LoginForm from "../../src/components/LoginForm";
// import {mount} from "@vue/test-utils";
//
// describe('LoginForm', () => {
//     it("it emits an event with a user data payload" ,() => {
//         const wrapper = mount(LoginForm);
//
//         //1.Find text input
//         const input = wrapper.find('input[type="text"]');
//         //2.set value for text input
//         input.setValue('Adam Jahr')
//         //3.simulate form submission
//         wrapper.trigger('submit')
//         //4.assert event has been emitted
//         const formSubmittedCalls = wrapper.emitted('formSubmitted');
//         expect(formSubmittedCalls).toHaveLength(1);
//         //5.asset payload is correct
//         const expectedPayload = {name:'Adam Jar'}
//         expect(wrapper.emitted('formSubmitted')[0][0]).toMatchObject(
//             expectedPayload
//         )
//     })
// })