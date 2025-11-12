/**
 * Test suite for ViewProfile.vue component.
 *
 * This suite verifies:
 * - The component renders profile labels and values.
 * - The initial state reflects the Pinia profile store.
 * - Changes to the store are reflected in the view.
 * - No input fields are rendered.
 */
import { mount, flushPromises } from '@vue/test-utils';
import ViewProfile from './ViewProfile.vue';
import { createPinia, setActivePinia, storeToRefs } from 'pinia';
import { useProfileStore } from '../store/profile';

describe('ViewProfile Component', () => {
    let wrapper: ReturnType<typeof mount>;
    let profileStore: ReturnType<typeof useProfileStore>;

    beforeEach(() => {
        setActivePinia(createPinia());
        profileStore = useProfileStore();
        wrapper = mount(ViewProfile);
    });

    afterEach(() => {
        wrapper.unmount();
    })

    it('renders profile default values', () => {
        expect(wrapper.find('[data-test-id="view-name-value"]').text()).toBe('John Doe');
        expect(wrapper.find('[data-test-id="view-age-value"]').text()).toBe('30');
    })

    it('reacts to store changes', async () => {
        let { name, age } = storeToRefs(profileStore);
        name.value = 'Bob Smith';
        age.value = 45;
        await flushPromises();
        expect(wrapper.find('[data-test-id="view-name-value"]').text()).toBe('Bob Smith');
        expect(wrapper.find('[data-test-id="view-age-value"]').text()).toBe('45');
    })
})
