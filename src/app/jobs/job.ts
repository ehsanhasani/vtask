export interface Job {
    position_title: string;
    organization_name: string;
    start_date: string;
    end_date: string;
    locations: Array<string>[];
    url: string;
}
