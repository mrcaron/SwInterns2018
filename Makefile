CXX = g++
CXXFLAGS = -std=c++11 -g -Wall

all: check enhanced-check

check: check.cpp 
	$(CXX) $(CXXFLAGS) -o check.cpp check 

enhanced-check: enhanced-check.cpp
	$(CXX) $(CXXFLAGS) -o enhanced-check.cpp enhanced-check 

clean: 
	rm check
	rm enhanced-check
