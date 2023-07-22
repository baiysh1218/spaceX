export type LaunchType = {
  flight_number: number;
  mission_name: string;
  launch_year: string;
  launch_date_local: string;
  rocket: {
    rocket_id: string;
    rocket_name: string;
  };
  launch_site: {
    site_name: string;
  };
  launch_success: boolean;
  links: {
    mission_patch: string;
    article_link: string;
    flickr_images: string[];
  };
  details: string;
};
