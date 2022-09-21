CREATE TABLE "car" (
	"id" serial,
	"mark_id" integer NOT NULL,
	"model_id" integer NOT NULL,
	"horsepower" integer NOT NULL,
	"year" integer NOT NULL,
	"owner_id" integer NOT NULL,
	CONSTRAINT "car_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);