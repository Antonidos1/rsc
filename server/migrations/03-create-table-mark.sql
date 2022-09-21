CREATE TABLE "mark" (
	"id" serial NOT NULL,
	"mark" VARCHAR(255) NOT NULL,
	"country" integer NOT NULL,
	CONSTRAINT "mark_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);