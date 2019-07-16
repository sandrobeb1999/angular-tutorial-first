import { AuthService } from "./auth.service";

describe('Auth Service tests', () => {
    const service: AuthService = new AuthService();

    it('Default value of access should be false', () => {
        expect(service.isEnabled()).toBe(false);
    })
});