CREATE TABLE "position" (
	"id" serial,
	"position" VARCHAR(255),
	CONSTRAINT "position_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);