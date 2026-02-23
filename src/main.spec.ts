/*
https://docs.nestjs.com/fundamentals/testing#unit-testing
*/

import { Test } from '@nestjs/testing';

describe('MainSpec', () => {
    let mainSpec: MainSpec;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [], // Add
            controllers: [], // Add
            providers: [],   // Add
        }).compile();

        mainSpec = moduleRef.get<MainSpec>(MainSpec);
    });

    it('should be defined', () => {
        expect(mainSpec).toBeDefined();
    });
});
