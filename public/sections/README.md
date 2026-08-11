# Section images

Drop files here and the section designs at /sections pick them up automatically.
Accepted extensions: jpg, jpeg, png, webp, avif, svg.

## The quickest path

Save one image as `placeholder.jpg`. Every slot below that has no file of its own
falls back to it, so all the sections fill at once.

## Per-slot files (override the shared placeholder)

| File              | Section                        | Drive folder                     |
|-------------------|--------------------------------|----------------------------------|
| hero.jpg          | 01 Hero Banner + 01B Pill Nav  | Hero Section                     |
| step.jpg          | 03 Step Section                | Step Section                     |
| practice.jpg      | 04 Our Practice (video still)  | What Sets Us Apart Section       |
| doctor.jpg        | 05 Our Doctors                 | Doctor Section                   |
| who-we-help.jpg   | 06 Who We Help                 | Services or Who We Help Section  |
| how-we-help.jpg   | 07 Treatments                  | How we Help Section              |
| instagram.jpg     | 08 Instagram Section           | Instagram Section                |
| cta.jpg           | 09 CTA Section                 | CTA Section                      |
| testimonial.jpg   | 10 Reviews                     | Testimonial Section              |
| location.jpg      | 11 Location Section            | Location Section                 |

12 Footer has no image slot.

## Per-item files (beat the section-wide file for their own row/tile)

    doctor-one.jpg              doctor-two.jpg

    who-we-help-kids.jpg        who-we-help-teens.jpg
    who-we-help-adults.jpg

    how-we-help-braces.jpg      how-we-help-clear-aligners.jpg
    how-we-help-damon-system.jpg  how-we-help-smile-for-life.jpg

    instagram-1.jpg   instagram-2.jpg   instagram-3.jpg
    instagram-4.jpg   instagram-5.jpg   instagram-6.jpg
    instagram-7.jpg   instagram-8.jpg   instagram-9.jpg
    instagram-10.jpg  instagram-11.jpg  instagram-12.jpg

## Note

Files are resolved while the page renders on the server. In dev a refresh is enough;
a production build has to be rerun after adding files.
