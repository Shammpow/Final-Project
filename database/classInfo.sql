CREATE TABLE classInfo (
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    class VARCHAR(300) NOT NULL,
    features VARCHAR(300) NOT NULL,
    cantrips VARCHAR(300) NOT NULL,
    spellSlots VARCHAR(300) NOT NULL,
    additionalTraits VARCHAR(300) NOT NULL
)