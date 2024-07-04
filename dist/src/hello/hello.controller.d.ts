import { HelloService } from './hello.service';
export declare class HelloController {
    private helloService;
    constructor(helloService: HelloService);
    getHealth(): string;
}
