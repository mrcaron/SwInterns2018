CXX = g++
CXXFLAGS = -std=c++11 -g -Wall

all: check enhanced-check

check: check.cpp 
	$(CXX) $(CXXFLAGS) check.cpp -o check 

enhanced-check: enhanced-check.cpp
	$(CXX) $(CXXFLAGS) enhanced-check.cpp -o enhanced-check 

clean: 
	rm check
	rm enhanced-check
