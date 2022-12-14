ALTER TABLE "car" ADD CONSTRAINT "car_fk0" FOREIGN KEY ("mark_id") REFERENCES "mark"("id");
ALTER TABLE "car" ADD CONSTRAINT "car_fk1" FOREIGN KEY ("model_id") REFERENCES "model"("id");
ALTER TABLE "deal" ADD CONSTRAINT "deal_fk0" FOREIGN KEY ("car_id") REFERENCES "car"("id");
ALTER TABLE "mark" ADD CONSTRAINT "mark_fk0" FOREIGN KEY ("country") REFERENCES "country"("id");
ALTER TABLE "model" ADD CONSTRAINT "model_fk0" FOREIGN KEY ("mark") REFERENCES "mark"("id");
ALTER TABLE "car" ADD CONSTRAINT "car_fk2" FOREIGN KEY ("owner_id") REFERENCES "user"("id");