import { TestBed } from '@angular/core/testing';
import { VueDocGenService } from './vue-docgen.service';

describe('VueDocGenService', () => {
    let service: VueDocGenService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [VueDocGenService]
        });

        service = TestBed.get(VueDocGenService);
    });

    it('should create', () => {
        expect(service).toBeTruthy();
    });

    it('should have all the correct properties', () => {
        const data = {
            meta: { app: 'THE_APP' }
        } as any;
        const actual = service.aggregate(data);

        expect(actual[0].kind).toEqual('text');
        expect(actual[0].language).toEqual('markdown');
        expect(actual[0].uri).toEqual('README.md');
        // WE GET THE FIRST LINE OF THE README
        expect(actual[0].value.split('\n')[0]).toEqual('## How to use the THE_APP Vue module');
    });
});
