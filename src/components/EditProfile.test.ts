/**
 * Test suite for EditProfile.vue component.
 *
 * This suite verifies:
 * - The component renders all required form fields and labels.
 * - The initial state of the form reflects the Pinia profile store.
 * - Changes to form inputs update the Pinia profile store correctly.
 */
import { mount } from '@vue/test-utils';
import EditProfile from './EditProfile.vue';
import { createPinia, setActivePinia } from 'pinia';
import { useProfileStore } from '../store/profile';

describe('EditProfile Component', () => {
    let wrapper: ReturnType<typeof mount>;
    let profileStore: ReturnType<typeof useProfileStore>;

    /**
     * Sets up a fresh Pinia store and mounts the EditProfile component before each test.
     */
    beforeEach(async () => {
        setActivePinia(createPinia());
        wrapper = await mount(EditProfile);
        profileStore = useProfileStore();
    });

    /**
     * Unmounts the component after each test to clean up.
     */
    afterEach(() => {
        wrapper.unmount();
    })

    /**
     * Checks that all required labels and input fields are rendered.
     */
    it('renders correctly', () => {
        expect(wrapper.find('[data-test-id="name-label"]').exists()).toBe(true);
        expect(wrapper.find('[data-test-id="name-input"]').exists()).toBe(true);
        expect(wrapper.find('[data-test-id="age-label"]').exists()).toBe(true);
        expect(wrapper.find('[data-test-id="age-input"]').exists()).toBe(true);
    });

    /**
     * Verifies that the form inputs display the initial values from the Pinia profile store.
     */
    it('shows initial profile data from store', () => {
        const nameInput = wrapper.find('[data-test-id="name-input"]');
        const ageInput = wrapper.find('[data-test-id="age-input"]');

        expect((nameInput.element as HTMLInputElement).value).toBe(profileStore.name);
        expect((ageInput.element as HTMLInputElement).value).toBe(profileStore.age.toString());
    });

    /**
     * Ensures that changing the form inputs updates the Pinia profile store values.
     */
    it('updates profile store on input change', async () => {
        const nameInput = wrapper.find('[data-test-id="name-input"]');
        const ageInput = wrapper.find('[data-test-id="age-input"]');

        await nameInput.setValue('Jane Smith');
        await ageInput.setValue('28');
        
        expect(profileStore.name).toBe('Jane Smith');
        expect(profileStore.age).toBe(28);
    });
})