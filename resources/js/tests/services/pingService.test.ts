import { PingService } from '../../services/pingService';

test('ping', () => {
    expect(PingService.ping()).toBe('pong');
});
