import random

# Base class for an animal colony
class AnimalColony:
    def __init__(self, name, species, number_of_animals):
        self.name = name
        self.species = species
        self.number_of_animals = int(number_of_animals)
        self.initial_number = self.number_of_animals

    def simulate_turn(self, other_colonies, turn):
        raise NotImplementedError("This method should be overridden by derived classes")


# Derived classes for Prey
class Lemming(AnimalColony):
    def simulate_turn(self, predators, turn):
        if self.number_of_animals < 200:
            self.number_of_animals *= 2
        else:
            self.number_of_animals = 30
        for predator in predators:
            self.number_of_animals -= 4 * predator.number_of_animals
        self.number_of_animals = max(0, self.number_of_animals)


class Hare(AnimalColony):
    def simulate_turn(self, predators, turn):
        for predator in predators:
            self.number_of_animals -= 2 * predator.number_of_animals
        if self.number_of_animals < 100:
            self.number_of_animals = int(self.number_of_animals * 1.5)
        else:
            self.number_of_animals = 20
        self.number_of_animals = max(0, self.number_of_animals)


class Gopher(AnimalColony):
    def simulate_turn(self, predators, turn):
        for predator in predators:
            self.number_of_animals -= predator.number_of_animals
        if turn % 4 == 0:
            if self.number_of_animals < 200:
                self.number_of_animals *= 2
            else:
                self.number_of_animals = 40
        self.number_of_animals = max(0, self.number_of_animals)


# Derived classes for Predators
class SnowyOwl(AnimalColony):
    def simulate_turn(self, preys, turn):
        if turn % 8 == 0 and preys:
            chosen_prey = random.choice(preys)
            if chosen_prey.number_of_animals > 4 * self.number_of_animals:
                chosen_prey.number_of_animals -= 4 * self.number_of_animals
                self.number_of_animals += self.number_of_animals // 4  # Reproduction
            else:
                self.number_of_animals -= self.number_of_animals // 2  # Starvation
        self.number_of_animals = max(0, self.number_of_animals)


# Map of species codes to classes
species_to_class_map = {
    'l': Lemming,
    'h': Hare,
    'g': Gopher,
    'o': SnowyOwl,
    # Add mappings for other predator species
}

# Function to read from the file and initialize colonies
def read_file_and_initialize_colonies(filename):
    preys = []
    predators = []

    with open(filename, 'r') as file:
        lines = file.readlines()
        colony_count = int(lines[0].split()[0])

        for i in range(1, colony_count + 1):
            name, species, number = lines[i].split()
            species_class = species_to_class_map.get(species)
            if species_class:
                colony = species_class(name, species, number)
                if species in ['l', 'h', 'g']:  # Prey species codes
                    preys.append(colony)
                else:  # Predator species codes
                    predators.append(colony)

    return preys, predators


# Main simulation loop
def simulate_ecosystem(preys, predators):
    turn = 0
    while True:
        # Check stop condition
        if any(pred.number_of_animals <= 4 or pred.number_of_animals >= pred.initial_number * 2 for pred in predators):
            break

        print(f"Turn {turn}:")
        for colony in preys + predators:
            print(f"{colony.name} ({colony.species}): {colony.number_of_animals}")

        for prey in preys:
            prey.simulate_turn(predators, turn)
        for predator in predators:
            predator.simulate_turn(preys, turn)

        turn += 1


# Main function
def main():
    filename = input("Enter the name of the input file: ")
    try:
        preys, predators = read_file_and_initialize_colonies(filename)
        simulate_ecosystem(preys, predators)
    except Exception as e:
        print(f"An error occurred: {e}")


# Entry