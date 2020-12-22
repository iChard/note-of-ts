// declare var jQuery: (selector: string) => any;
declare function jQuery(selector: string): void;
declare class Animal {
    constructor(name: string);
    name: string;
    sayHi(): string;
}

declare namespace jQuery {
    interface AjaxSetting {
        method?: 'GET'|'POST',
        data?: any;
    }
    function ajax(url: string, setting?: jQuery.AjaxSetting): void;
    const version: string;
    class Event {
        blur(eventType: EventType): void;
    }
    enum EventType {
        CustomClick
    }
    
}

// interface AjaxSetting {
//     method?: 'GET'|'POST',
//     data?: any;
// }